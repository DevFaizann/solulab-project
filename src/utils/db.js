const { MongoClient } = require('mongodb');
const config = require('../config');

const client = new MongoClient(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000, // 10 seconds
    socketTimeoutMS: 30000 // 30 seconds
});


const connectToDatabase = async()=>{
    try{
        await client.connect();
        console.log("Connected to database");
    } catch(err){
        console.error(err);
    }
};

const getDb = ()=> {
    return client.db();
};

module.exports ={
    client,
    connectToDatabase
};

