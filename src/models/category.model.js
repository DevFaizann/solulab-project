const {Schema, model} = require('mongoose');

const categorySchema = new Schema({
    categoryId: {//Category ID
        type: String,
        required: true,
        unique: true //this avoid duplication of categories
    },
    categoryName: {
        type: String,
        required: true
    }
});

// const Category = model('Category', categorySchema);

// module.exports - Category;
module.exports = model('Category', categorySchema);
