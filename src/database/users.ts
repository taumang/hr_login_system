import mongoose from "mongoose";


//This is the schema for the login page of the wireframe
const UserSchema = new mongoose.Schema({
    username:{
        type:String, 
        required:true
    },
    authentication:{
        password: {
            type: String, 
            required:true,
            select:false
        },
        salt: {
            type: String, 
            required:true,
            select:false
        },
    }
});