const express = require('express');
const router = express.Router();
//importing the category controller
const { 
        createCategory,
        readCategoryById, 
        readCategories, 
        updateCategory, 
        deleteCategory 
    } = require('../controllers/category.controller.js');

//Route to create a new category
router.post('/categories', createCategory);
// router.get('/trial', (req,res) => {
//     res.send("i am a trial")
// })

//Route to get all categories
router.get('/categories', readCategories);

//Route to get a single category by id
router.get('/categories/:categoryId',readCategoryById);

//Route to update category
router.put('/categories/:categoryId', updateCategory);

//Route to delete a category
router.delete('/categories/:categoryId', deleteCategory);

module.exports = router;

