import axios from "./Api";

const registerUserApi = (data)=>axios.post("/auth/register",data);
const loginUserApi = (data)=>axios.post("/auth/login",data);

export default{
    registerUserApi,loginUserApi
}
