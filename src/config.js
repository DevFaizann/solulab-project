const dotenv = require('dotenv');
dotenv.config();
//we are importing dotenv and calling config() to load environment variables from .env file

module.exports = {
    PORT: process.env.PORT | 3000,
    MONGODB_URI: 'mongodb+srv://dbFaizan:dbFaizanPassword@cluster0.skjmkiq.mongodb.net/?retryWrites=true&w=majority',
};