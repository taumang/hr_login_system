import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';// for handling cookies 
import compression from 'compression';// for compression is use for HTTP responses.
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router/indexRouter';

export const app = express();

//here the cors middleware is added for credentials
app.use(cors({
    credentials:true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(5000, ()=>{
    console.log('Server running on http://localhost:5000');
});

const MONGO_URL = "mongodb+srv://tau:09Taumang@clusterhrsystem.csqm3gg.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);

//index.ts is listening to the errors for the MongoDB connection
mongoose.connection.on('error',(error:Error) => console.log(error));
app.use('/',router());
