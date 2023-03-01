const express = require('express');
const logger = require('./utils/logger.js');
const config = require('./config.js');

const app = express();

//Middleware
//parsing incoming json data
app.use(express.json());

//Routes
app.use('/api', require('./routes/product.routes'));
app.use('/api', require('./routes/category.routes'));

//Error Handling
//app.use() func takes four arguments
//this middleware is important for error handling.
//without it any uncaught error would crash the server and leave the client hanging without a response
app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).send('Something went wrong!;')
});

//Start server
app.listen(config.PORT, () => {
    logger.info("Server started on port ${config.PORT}");
});

