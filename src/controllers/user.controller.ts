import { Request, Response } from "express";
import { handleCreateUser, getAllUsers, handleDeleteUser, getUserById,handleUpdateUser } from "../services/user.service";


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
const postCreateUserPage= async(req: Request, res:Response)=>{
    //object destructuring
    
    const {fullName, email, address} = req.body;
    
    await handleCreateUser(fullName, email, address);
    return res.redirect("/");
}
const postDeleteUser= async(req: Request, res:Response)=>{
    const{id}= req.params;
    await handleDeleteUser(id);
    return res.redirect("/");
}
const getViewUser= async(req: Request, res:Response)=>{
    const{id}= req.params;

    //get user by id
    const user = await getUserById(id);
    return res.render("view-user",{
        id: id,
        user:user
    });
}
const postUpdateUser= async(req: Request, res:Response)=>{
    const{id, fullName, email, address}= req.body;
    const a =await handleUpdateUser(id, fullName, email, address);
    return res.redirect("/");
}

export {getHomePage, getCreateUserPage,postCreateUserPage,postDeleteUser,getViewUser,postUpdateUser};