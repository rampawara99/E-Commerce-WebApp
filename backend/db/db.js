import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // url 
        const username = "kusarampawara77";
        const password = "Pass1999";
        const clusterUrl = "cluster0.s2eqkuq.mongodb.net";
        const dbName = "e-commerce";

        const url = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}`; 

        const connect = await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        mongoose.set('strictQuery', true);
        mongoose.set('strictQuery', false);
        console.log(`MongoDB connected`);
        console.log(`Hostname: ${connect.connection.host}`);
    } catch (err) {
        console.log("somthing is wrong........... " + err);
    }
}

export default connectDB;


