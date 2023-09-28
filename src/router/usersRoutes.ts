//Routes for some of the user crud operations, user also can modify and delete records according to whether they are logged in or not
import express from 'express';
import { deleteUser, getAllUsers, updateUser } from '../controllers/usersControllers';
import { isAuthenticated , isOwner} from '../middlewares/indexAuthMid';

export default (router:express.Router) => {
    router.get('/users',isAuthenticated,getAllUsers);
    router.delete('/users/:id',isAuthenticated ,isOwner, deleteUser);
    router.patch('/users/:id', isAuthenticated, isOwner,updateUser );
};