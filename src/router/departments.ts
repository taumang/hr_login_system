import express from 'express';
import { deleteDepartment, getAllDepartments, updateDepartment } from '../controllers/departments';
import { isAuthenticated , isOwner} from '../middlewares';

export default (router:express.Router) => {
    router.get('/department',getAllDepartments);
    router.delete('/department/:id',deleteDepartment);
    router.patch('/department/:id',updateDepartment);
};