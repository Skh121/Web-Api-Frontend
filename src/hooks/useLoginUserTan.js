import { useMutation } from ("@tanstack/react-query")
import { toast } from ("react-toastify")
import {loginUserService} from "../services/authService"

const useLoginUserTan =()=>{
    return useMutation(
        {
            mutationFn:loginUserService,
            mutationKey:['Login'],
            onSuccess:(data)=>{
                toast.success(data.message || "Login Successfull")
            },
            onError:(err)=>{
                toast.error(err.message || "Login Failed")
            }
        }
    )
}

export default useLoginUserTan;