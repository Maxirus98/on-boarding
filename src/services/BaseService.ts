import { AxiosResponse } from 'axios';
import http from '../config/http-common';
import Persona from '../models/Persona';

export function getUsers():Promise<AxiosResponse<Persona>>{
    return http.get("/");
}

export function addUser(user:Persona):Promise<AxiosResponse<Persona>> {
    return http.post("/", JSON.stringify(user));
}