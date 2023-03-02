const Category = require('../models/category.model');

//Creating a new category
exports.createCategory = async(req, res) => {
    try {
        const {categoryId, categoryName} = req.body;

        const newCategory = new Category({
            categoryId,
            categoryName
        });

        await newCategory.save();

        res.json(newCategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
    }
};

//Reading a category
exports.readCategoryById = async(req,res) => {
    try {
        const { categoryId } = req.params;

        const category = await Category.findOne({categoryId});

        if(!category){
            return res.status(404).json({message: "Category not found"});
        }

        res.json(category);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server error'});
        
    }
};

//Reading all categories
exports.readCategories = async(req,res) => {
    try {
        const categories = await Category.find();

        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
        
    }
};

//Update a Category
exports.updateCategory = async (req, res) => {
    const { categoryId } = req.params;
    const { categoryName } = req.body;
  
    try {
      const category = await Category.findOneAndUpdate(
        { categoryId },
        { categoryName },
        { new: true, useFindAndModify: false }
      );
  
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
  
      res.json(category);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  //Deleting a category
exports.deleteCategory = async(req,res) => {
    try {
        const {categoryId} = req.params;
        
        const category = await Category.findOneAndDelete({ categoryId });

        if(!category){
            return res.status(404).json({message: 'Category not found'});
        }

        res.json({message: 'Category deleted successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'});
        
    }
};