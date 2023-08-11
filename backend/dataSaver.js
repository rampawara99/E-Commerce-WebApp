import fs from 'fs';
import mongoose from 'mongoose';
// import UsersModel from './model/usersModel.js';
import ProductModel from './model/productsModel.js';


const data = JSON.parse(fs.readFileSync('./productsData.json', 'utf8'));


const username = "kusarampawara77";
const password = "Pass1999";
const clusterUrl = "cluster0.s2eqkuq.mongodb.net";
const dbName = "e-commerce";

const url = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const jsonFile = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));


const db = mongoose.connection;

db.on('error', (error) => console.log("Something is wrong: ", error));
db.once('open', () => console.log("successFully connected"));

const refreshAll = async () => {  
    // console.log("First Id Num: --",data[0]._id) 
    for(let i=0; i< data.length; i++){
        const {_id} = data[i];
        console.log(_id.$oid)
        data[i]._id = _id.$oid;
    }


    // _id: { '$oid': '64d1ddc408bd1d521ed4a31a' },
    // firstName: 'akesh',
    // lastName: 'pawara',
    // email: 'ak@gmail.com',
    // password: '1234567',
    // user: 'user',

    await ProductModel.deleteMany({})
    // console.log(connection)
    const value = await ProductModel.insertMany(data);
    console.log(value);
    await mongoose.disconnect();
}
refreshAll()
