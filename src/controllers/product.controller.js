const Product = require('../models/product.model.js');
const Category = require('../models/category.model.js');
const { json } = require('express/lib/response');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

//Creating a new product
exports.createProduct = async (req,res) =>{
    try {
        const {productId, productName, qtyPerUnit, unitPrice, unitInStock, discontinued, categoryId, categoryName} = req.body;

        //Lets find the category you want to add your product to
        let category = await Category.findOne({categoryName});

        //if category does not exist, create a new one
        if(!category){
            category = new Category({categoryName});
            await category.save();
        }
S
        //continue with creating the product
        const newProduct = new Product({
            productId,
            productName,
            qtyPerUnit,
            unitPrice,
            unitInStock,
            discontinued,
            categoryId: category._id,
            categoryName: category.categoryName
        });

        await newProduct.save();

        res.json({message: "Product created successfully!"});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
};

//Searching for a particular product along with their category name
exports.readProductById = async (req,res) => {
    try {

        const id = req.params.id;

        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({message: 'Invalid id'});
        }
        //as the name suggests, here, "findById" is a mongoose method to search
        //for a product in the Product collection by its 'id'.
        //so 'req.params.id' is referred to the value of the 'id' parameter in the request URL,
        //which is used to find the document witht the corresponding id
    
        // const product = await Product.findById(new ObjectId(req.params.id)).populate('categoryId');
        const product = await Product.findById(id).populate('categoryId');
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

    try {//finding the product by its ID and updating it riht away
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
            );

        if(!product){
            return res.status(404).json({message: 'Product not found'});
        }
        
        
        //getting fieldname and value from the body
        // const {fieldName, value} = req.body;
        // if(!fieldName || !value){//if any one of these is missing
        //     return res.status(400).json({message: 'Invalid request'});
        // }

        //as per my understanding of the question, this api should update a particular record of the product
        //therefore
        // product[fieldName] = value;

        // const updatedProduct = await product.save();
        // res.json(updatedProduct);
        //updating the product with the provided 'fieldName' and 'value'
        // res.json(updatedProduct);
        
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Server Error'});      
    }
};


//Deleting a product
exports.deleteProduct = async (req, res) => {
    try {
      const product = await Product.findOneAndDelete({ _id: req.params.id });
      
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.json({ message: 'Product has been deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
