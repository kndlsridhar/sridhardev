
const mongoose = require('mongoose')

const username = encodeURIComponent("kndlsridhar");
const password = encodeURIComponent("Ammuh@24k");

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(`mongodb+srv://${username}:${password}@projects.rjrif.mongodb.net/?retryWrites=true&w=majority&appName=projects`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        console.log('MongoDB Connected',`${conn. connection. host}`)
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports=connectDB;

