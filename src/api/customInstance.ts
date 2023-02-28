import axios, {InternalAxiosRequestConfig} from 'axios'
import {instance} from "./instance";



/*const requestHandler = (request: InternalAxiosRequestConfig) => {
    // Token will be dynamic so we can use any app-specific way to always
    // fetch the new token before making the call
    request.headers.Authorization = 'Bearer {jwtToken}';

    return request;
};

const errorHandler = (error: any) => {
    return Promise.reject(error);
};*/





export const customInstance  = instance.interceptors.request.use(

    function (request) {
        request.headers.Authorization = 'Bearer {jwtToken}';

        return request;
    },

    function (error) {
        return Promise.reject(error);
    }
);
