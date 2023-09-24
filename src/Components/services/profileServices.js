import axios from "axios";
import { currentUser } from "../auth";


export const getUser = ()=>{
    const token= currentUser()
    const getUserInstance = axios.create({
        baseURL:process.env.REACT_APP_BASE_URL,
        timeout:10000,
        headers:{"token":`Bearer ${token}`},
        validateStatus:function(status){
            return status <500;
        }
    })

    return  getUserInstance.get("/api/getuser").then((result)=>{
        console.log("first",result)
        return result

    }).catch((err)=>{
        console.log("Err from get User",err)
    })

}
export const changeProfile =(data)=>{
    const token= currentUser()
    const instance = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
    timeout:10000,
    headers:{"token":`Bearer ${token}`},
    validateStatus:function(status){
        return status <500;
    }
})
    return instance.put("/api/updateUser",data).then((result)=>{
        
        return result
        
    }).catch((err)=>{
        console.log("Err from get User",err)
    })

}
export const addNewItem =(data)=>{
const token = currentUser()
console.log("first iapi",data)
const instance = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
    timeout:10000,
    headers:{"token":`Bearer ${token}`},
    validateStatus:function(status){
        return status <500;
    }
})
return instance.post("/api/addAll",data).then((result)=>{
        
    return result
    
}).catch((err)=>{
    console.log("Err from addcard",err)
})
}

export const userData = (data)=>{
    const token = currentUser()
    const instance = axios.create({
        baseURL:process.env.REACT_APP_BASE_URL,
        timeout:10000,
        headers:{"token":`Bearer ${token}`},
        validateStatus:function(status){
            return status <500;
        }
    })
    return instance.get("/api/getPost",data).then((result)=>{

        return result
    }).catch((err)=>{
        console.log("err from server",err)
    })
    
}

export const deleteItem = (data)=>{
    const token = currentUser()
    const instance = axios.create({
        baseURL:process.env.REACT_APP_BASE_URL,
        timeout:10000,
        headers:{"token":`Bearer ${token}`},
        validateStatus:function(status){
            return status <500;
        }
    })
console.log("first",data)
    return instance.post("/api/delete",data).then((result)=>{
       console.log("first",result)
        return result
    }).catch((err)=>{
        console.log("err from delete",err)
    })

}