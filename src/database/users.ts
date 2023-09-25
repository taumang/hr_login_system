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
        sessionToken : {
            type: String,
            select: false,
        },
    }
});


// Setting Functions here for interaction with the database. 
export const UserModel = mongoose.model('User', UserSchema);

export const getUsers = () => UserModel.find();// purpose to get data from the database.
export const getUserByUsername = (username:string) => UserModel.findOne({ username: username});//need to test this code...
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({
    'authentication.sessionToken':sessionToken,
});
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values:Record<string, any>) => new UserModel(values).save().then((user)=> user.toObject());
export const deleteUserById = (id:string) => UserModel.findOneAndDelete({_id: id});
export const updateUserById = (id:string, values:Record<string,any>) => UserModel.findByIdAndUpdate(id,values);