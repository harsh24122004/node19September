const mongoose = require('mongoose');

async function connection(){
    try {
       await mongoose.connect(`mongodb://localhost:27017/batch-3`);
       console.log("database connected");
        
    } catch (error) {
        console.log(err);
        
    }
}

module.exports = connection;