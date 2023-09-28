import express  from "express";
import { createUser, getUserByEmail_Address } from "../database/usersDatabase";
import { authentication, random } from "../helpers/indexCrypto";

export const login = async (req:express.Request, res: express.Response) => {

    try {
        const {email_address,password} = req.body;

        if(!password ||!email_address){
            return res.sendStatus(400);
        };
        const user = await getUserByEmail_Address(email_address)
                .select('+authentication.salt +authentication.password');

        if(!user){
            return res.sendStatus(400)
        };

        const expectedHash = authentication(user.authentication.salt,password);

        if(user.authentication.password !== expectedHash){
            return res.sendStatus(403)
        };


        const salt = random();
        user.authentication.sessionToken = authentication(salt, user._id.toString());

        await user.save();

        res.cookie('HR-AUTH',user.authentication.sessionToken, {domain:'localhost',path: '/'});

        return res.status(200).json(user).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const register = async (req:express.Request, res:express.Response) => {
    try{
        const {password, username, email_address,first_name,last_name,telephone_number,employee_manager,status} = req.body;

        if(!email_address||!password||!username||!first_name||!last_name||!telephone_number||!employee_manager||!status){
            return res.sendStatus(400);
        }

        const existingUser = await getUserByEmail_Address(email_address);

        if(existingUser){
            return res.sendStatus(400);
        };

        const salt = random();
        const user = await createUser({
            first_name,
            last_name,
            telephone_number,
            email_address,
            employee_manager,
            status,
            username,
            authentication:{
                salt,
                password: authentication(salt,password)
            }
        });
        //success message for frontend
        return res.status(200).json(user).end();

    }catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
};

