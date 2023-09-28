import express from 'express';
import {getDepartments,deleteDepartmentById,updateDepartmentById, getDepartmentById} from '../database/departmentsDatabase';

export const getAllDepartments = async (req:express.Request, res:express.Response) =>{
    try {
        const departments = await getDepartments();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const deleteDepartment = async (req:express.Request, res:express.Response) => {

    try {
        const {id} = req.params;
        const deletedDepartment = await deleteDepartmentById(id);   
        
        return res.json(deletedDepartment);

    } catch (error) {
        console.log(error);
        return res.sendStatus(400); 
       }

};

export const updateDepartment = async (req:express.Request, res:express.Response)=>{
    try {
        const {id} = req.params;
        const {manager} = req.body;

        if(!manager){
            return res.sendStatus(400);
        }

        const department = await getDepartmentById(id);
        department.manager = manager;
        await department.save();

        return res.status(200).json(department).end();
    } catch (error) {
        console.log(error)
        return res.sendStatus(400);
    }
}