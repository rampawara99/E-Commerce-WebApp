import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import Router from "./routers/router.js";
// import dotenv from 'dotenv';
import connectDB from './db.js';
// dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: '10mb' }));
// Middleware for handling file uploads
app.use(fileUpload());
app.use(express.json());
app.use(cors());
app.use('/', Router);

app.listen(PORT, () => {
    console.log("Server is running on " + PORT);
});

connectDB();

