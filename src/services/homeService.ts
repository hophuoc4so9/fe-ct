import axios from "axios";
import { request } from "../common/config/request";
import { User } from "../type";
export const HomeAPI = {
    getUser: async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response;
    },
    getUserById: async (address: string) => {
        const response = await request.get(`/api/v1/user?address=${address}`)
        return response.data;
     },
     createUser: async (data: User) => {
        const response = await request.post(`/api/v1/user/createUser`,data)
        return response.data;
     },
};