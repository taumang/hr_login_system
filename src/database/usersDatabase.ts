import mongoose from "mongoose";

// Had some trouble trying yo link the DepartmentSchema with the main UserSchema, to create a relation bewteen them


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
    },
    // trying to create a link between the status types in both the Schemas.
    status: {
        type:String,
        required:true
    },
    employee_manager:{
        type:String,
        required:true
    },
    email_address:{
        type:String,
        required:true
    },
    telephone_number:{
        type:String,
        required:true
    },
    first_name:{
        type: String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    }
});



// Setting Functions here for interaction with the database. 
export const UserModel = mongoose.model('User', UserSchema);


export const getUsers = () => UserModel.find();// purpose to get data from the database.
export const getUserByEmail_Address = (email_address:string) => UserModel.findOne({email_address:email_address});//need to test this code...
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({
    'authentication.sessionToken':sessionToken,
});
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values:Record<string, any>) => new UserModel(values).save().then((user)=> user.toObject());
export const deleteUserById = (id:string) => UserModel.findOneAndDelete({_id: id});
export const updateUserById = (id:string, values:Record<string,any>) => UserModel.findByIdAndUpdate(id,values);