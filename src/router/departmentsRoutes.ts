import express from 'express';
import { deleteDepartment, getAllDepartments, updateDepartment } from '../controllers/departmentsControllers';


export default (router:express.Router) => {
    router.get('/department',getAllDepartments);
    router.delete('/department/:id',deleteDepartment);
    router.patch('/department/:id',updateDepartment);
};