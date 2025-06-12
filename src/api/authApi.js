import axios from "./Api";

exports.registerUserApi = (data)=>axios.post("/auth/register",data);
exports.loginUserApi = (data)=>axios.post("/auth/login",data);
