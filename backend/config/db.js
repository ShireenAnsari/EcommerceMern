const mongoose = require("mongoose")


async function connectDB(){
    try{
    const connectionInstance=    await mongoose.connect(process.env.MONGODB_URI)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host} `);
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB