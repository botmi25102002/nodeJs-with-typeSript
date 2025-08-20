import express,{Express} from "express";
import { getHomePage, getCreateUserPage,postCreateUserPage } from "../controllers/user.controller";
const router = express.Router();

const webRoutes =(app: Express)=>{
    router.get("/", getHomePage);
    //getHomePage tham chiếu, truyền data, gọi tới nó, không thực thi nó tại đây.
    //getHomePage() thực thi function ngay tại đây
    router.get("/create-user",getCreateUserPage );
    router.post("/handle-create-user",postCreateUserPage);
    app.use("/", router)
}
export default webRoutes;

