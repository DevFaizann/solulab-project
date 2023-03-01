//destructuring
const { MongoClient } = require('mongodb');
const config = require('./config.js');

const client = new MongoClient(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//this function exports a promise that resolves once the connection is established
async function connectToDatabase(){
    try{
        await client.connect();
        console.log("Connected to database");
    } catch(err){
        console.error(err);
    }
}

module.exports = {
    connectToDatabase,
};
