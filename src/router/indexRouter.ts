// Cleaning and setting up different sections of the website in this case the Users(Employees) and departments
import express  from "express";
import authentication from "./authenticationRoutes";
import users from "./usersRoutes";
import departments from "./departmentsRoutes";

const router = express.Router();

export default (): express.Router =>{
    authentication(router);
    users(router);
    departments(router);

    return router;
};