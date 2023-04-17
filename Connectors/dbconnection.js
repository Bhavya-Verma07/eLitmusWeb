const mongoose = require("mongoose");

const connectDB =async()=>{
    try {
       await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("mongodb is connected");
    } catch (error) {
       console.log(error); 
       console.log("Database is not connected");
    }

    // try {
    //     await mongoose.connect("mongodb://localhost:27017/testdatabase");
    //     console.log("Database is connected")
    // } catch (error) {
    //     console.log(error);
    // }
};

module.exports = connectDB;