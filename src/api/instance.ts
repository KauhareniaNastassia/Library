import axios, {InternalAxiosRequestConfig} from 'axios'

export const instance = axios.create({
    // baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    baseURL: `https://strapi.cleverland.by`,
    withCredentials: true,
    /*headers: {
        'Authorization':  'Bearer {jwtToken}'
    }*/
})





export const customInstance = axios.create({
    // baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    baseURL: `https://strapi.cleverland.by`,
    withCredentials: true,
    /*headers: {
        'Authorization':  'Bearer {jwtToken}'
    }*/
})

const requestHandler = (request: InternalAxiosRequestConfig) => {
    // Token will be dynamic so we can use any app-specific way to always
    // fetch the new token before making the call
    request.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token') || '{}')}`;
    return request;
};

const errorHandler = (error: any) => {
    return Promise.reject(error);
};

customInstance.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
);
