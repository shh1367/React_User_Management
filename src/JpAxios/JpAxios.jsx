import axios from "axios";

export const JpAxios = axios.create({
    baseURL : 'http://localhost/atarod-api-backend/',
    timeout : 5000 ,
    timeoutErrorMessage:'خطا',
    
   

   
    


})