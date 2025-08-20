import express,{Express} from "express";
import { getHomePage, getCreateUserPage,postCreateUserPage,postDeleteUser,getViewUser,postUpdateUser } from "../controllers/user.controller";
const router = express.Router();

const webRoutes =(app: Express)=>{
    router.get("/", getHomePage);
    //getHomePage tham chiếu, truyền data, gọi tới nó, không thực thi nó tại đây.
    //getHomePage() thực thi function ngay tại đây
    router.get("/create-user",getCreateUserPage );
    router.post("/handle-create-user",postCreateUserPage);
    router.post("/handle-delete-user/:id",postDeleteUser);
    router.get("/handle-view-user/:id",getViewUser);
    router.post("/handle-update-user",postUpdateUser);


    app.use("/", router)
}
export default webRoutes;

