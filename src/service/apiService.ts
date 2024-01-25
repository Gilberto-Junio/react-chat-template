import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImdpbGJlcnRvLmp1bmlvQGtlZXBpbnMuY29tLmJyIiwicm9sZSI6IjEiLCJuYmYiOjE3MDYxMzgyNDcsImV4cCI6MTcwNjE0Nzg0NywiaWF0IjoxNzA2MTM4MjQ3LCJpc3MiOiJrZWVwaW5zIiwiYXVkIjoiY3JlZGdyb3VwIn0.hxSJPhWjl-0PHIQP8En8WdvbMXiMsVP1-kFS7zQwkVA"

export const execApi = async (url: string, data:object,method?: string): Promise<AxiosResponse<[]>> => {
    var header:AxiosRequestConfig = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`,
        }
    }
    var execution
    if(method === 'POST') execution = axios.post(`${import.meta.env.VITE_URL_DOTCORE}${url}`,data,header);
    if(method === 'PUT') execution = axios.put(`${import.meta.env.VITE_URL_DOTCORE}${url}`,data,header);
    if(method === 'DELETE') execution = axios.put(`${import.meta.env.VITE_URL_DOTCORE}${url}`,data,header);
    else execution = axios.get(`${import.meta.env.VITE_URL_DOTCORE}${url}`);
    try {
        const response = await execution;
        return response;
    } catch (error) {
        throw error;
    }
};

export const execPrc = async (prc: string, data:object): Promise<AxiosResponse<[]>> => {
    var header:AxiosRequestConfig = {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`,
            'Codigo': prc
        }
    }
    try {
        const response = await axios.post(`${import.meta.env.VITE_URL_DOTCORE}api/service`,data,header);
        return response;
    } catch (error) {
        console.log(error)
        throw error;
    }
};