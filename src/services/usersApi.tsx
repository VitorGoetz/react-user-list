import axios from 'axios';
import IUser from '../interfaces/IUser';

const API = "https://jsonplaceholder.typicode.com/users";

export async function getUsers(): Promise<IUser[]>{
    const response = await axios.get(API);
    return response.data;
}