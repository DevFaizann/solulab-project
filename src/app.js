const express = require('express');
const logger = require('./utils/logger.js');
const config = require('./config.js');

const connectToDatabase = require('./utils/db.js');
const app = express();

//Middleware
//parsing incoming json data
app.use(express.json());

//Routes
app.use('/api', require('./routes/product.routes.js'));
app.use('/api', require('./routes/category.routes.js'));

//Error Handling
//app.use() func takes four arguments
//this middleware is important for error handling.
//without it any uncaught error would crash the server and leave the client hanging without a response
app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).send('Something went wrong!;')
});
connectToDatabase();
//Start server
// app.listen(config.PORT, () => {
//     logger.info(`Server started on port ${config.PORT}`);
// });
app.listen(3000, () => {
    logger.info(`Server started on port ${config.PORT}`);
});

module.exports = app;