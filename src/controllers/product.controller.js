const Product = require('../models/product.model');
const Category = require('../models/category.model');
const { json } = require('express/lib/response');

//Creating a new product
exports.createProduct = async (req,res) =>{
    try {
        const {productId, productName, qtyPerUnit, unitPrice, unitInStock, discontinued, categoryId} = req.body;

        //Lets find the category you want to add your product to
        let category = await Category.findOne({categoryName});

        //if category does not exist, create a new one
        if(!category){
            category = new Category({categoryName});
            await Category.save();
        }

        //continue with creating the product
        const newProduct = new Product({
            productId,
            productName,
            qtyPerUnit,
            unitPrice,
            unitInStock,
            discontinued,
            categoryId: categoryId
        });

        const savedProduct = await newProduct.save();
        res.json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
};

//Searching for a particular product along with their category name
exports.readProductById = async (req,res) => {
    try {
        //as the name suggests, here, "findById" is a mongoose method to search
        //for a product in the Product collection by its 'id'.
        //so 'req.params.id' is referred to the value of the 'id' parameter in the request URL,
        //which is used to find the document witht the corresponding id
        const product = await Product.findById(req.params.id).populate('categoryId');
        if(!product){
            return res.status(404).json({message: "Product Not Found!"});
        }
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Server Error'});
    }
};

//Getting all the products along with their category name
exports.readProducts = async(req,res) => {
    try {
        const products = await Product.find().populate('categoryId');
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Server Error'});
    }
};

//Update a particular record of the product
exports.updateProduct = async(req,res) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(404).json({message: 'Product not found'});
        }
        //as per my understanding of the question, this api should update a particular record of the product
        //therefore
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{ ...req.body}, {new: true});
        //findByIdAndUpdate() method finds the product with the specified ID and updates it with the properties from
        //req.body object.
        //...req.body copies all the properties from the req.body object to a new object
        //it is "object spread syntax"
        //{new: true} tells the method to return the updated document
        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Server Error'});      
    }
};

