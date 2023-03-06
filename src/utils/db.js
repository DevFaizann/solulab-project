const { MongoClient } = require('mongodb');
const config = require('../config');

const client = new MongoClient(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const connectToDatabase = async()=>{
    try{
        await client.connect();
        console.log("Connected to database");
    } catch(err){
        console.error(err);
    }
}

module.exports =connectToDatabase;

