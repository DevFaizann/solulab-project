const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    productId: {//Product ID
        type: String,
        required: true
    },
    productName: {//Product Name
        type: String,
        required: true
    },
    qtyPerUnit: {//Quantity of the Product
        type: String,
        required:true
    },
    unitPrice: {//Unit price of the product
        type: Number,
        required: true
    },
    unitInStock: {//Unit in Stock
        type: Number,
        required: true
    },
    discontinued: {//Product Discontinued or not
        type: Boolean,
        default: false
    },
    categoryId: {//Category ID
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    categoryName: {//Category Name
        type: String,
        required: true
    }
});

const Product = model('Product', productSchema);
module.exports = Product;