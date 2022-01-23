const User=require("./models");

const getUsersName=()=>{
    const user=new User("Johnny");
   

    return user.getName();




}

module.exports={
    getUsersName

}