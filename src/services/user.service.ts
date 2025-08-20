import getConnection from "../config/db"

const handleCreateUser=(
    fullName:string,
     email:string,
     address:string)=>{


    //insert into database

    console.log("check information")
}
const getAllUsers = async()=>{
    const connection = await getConnection();

    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM `users` '
        );
        return results;
    } catch (err) {
        console.log(err);
        return [];
    }

return "@@@@@@"
}
export {handleCreateUser, getAllUsers}