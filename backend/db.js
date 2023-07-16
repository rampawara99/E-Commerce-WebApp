import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const connect = await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {useNewUrlParser: true, useUnifiedTopology:true});
        mongoose.set('strictQuery', true);
        mongoose.set('strictQuery', false);
        console.log(`MongoDB connected`);
        console.log(`Hostname: ${connect.connection.host}`);
    }catch(err){
        console.log("somthing is wrong........... "+ err);
    }
}

export default connectDB;


