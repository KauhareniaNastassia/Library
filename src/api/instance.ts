import axios, {InternalAxiosRequestConfig} from 'axios'

export const instance = axios.create({
    baseURL: `https://strapi.cleverland.by`,
    withCredentials: true,
})

export const customInstance = axios.create({
    baseURL: `https://strapi.cleverland.by`,
    withCredentials: true,
})

const requestHandler = (request: InternalAxiosRequestConfig) => {
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
