import axios, {request} from "axios";

import {authService} from "./authService";
import {baseURL} from "../constants";

const axiosService = axios.create({baseURL})

axiosService.interceptors.request.use(request=>{
    const token = authService.getToken();
    console.log(token)
    if(token){
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

export {
    axiosService
}