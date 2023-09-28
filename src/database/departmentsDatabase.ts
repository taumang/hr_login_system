import mongoose from "mongoose";

const DepartmentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
    },
    manager:{
        type:String,
        required: true
    }
});

export const DepartmentModel = mongoose.model('Department', DepartmentSchema);


export const getDepartments = () => DepartmentModel.find();
export const getDepartmentByManager = (manager:string) => DepartmentModel.findOne({manager:manager});

export const getDepartmentById = (id: string) => DepartmentModel.findById(id);
export const createDepartment = (values:Record<string, any>) => new DepartmentModel(values).save().then((department)=> department.toObject());
export const deleteDepartmentById = (id:string) => DepartmentModel.findOneAndDelete({_id: id});
export const updateDepartmentById = (id:string, values:Record<string,any>) => DepartmentModel.findByIdAndUpdate(id,values);