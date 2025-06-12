import {registerUserApi,loginUserApi} from "../api/authApi"
exports.registerUserService= async(formData)=>{
    try{
        const response = await registerUserApi(formData);
        return response.data
    }catch(e){
        throw e.response?.data || {message:"Registration Failed"}
    }
}
exports.loginUserService= async(formData)=>{
    try{
        const response = await loginUserApi(formData);
        return response.data
    }catch(e){
        throw e.response?.data || {message:"Login Failed"}
    }
}
