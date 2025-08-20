import { Request, Response } from "express";
import { handleCreateUser, getAllUsers } from "../services/user.service";


const getHomePage= async(req:Request, res:Response)=>{
    //get users
    const users = await getAllUsers();
        return res.render("home.ejs",{
            // x <-y lấy giá trị bên phải gắn cho bên tay trái
            users: users
        });
}
const getCreateUserPage=(req: Request, res:Response)=>{
    return res.render("create-user");
}
const postCreateUserPage=(req: Request, res:Response)=>{
    //object destructuring
    const {fullName, email, address} = req.body;
    handleCreateUser(fullName, email, address);
    return res.redirect("/");
}

export {getHomePage, getCreateUserPage,postCreateUserPage};