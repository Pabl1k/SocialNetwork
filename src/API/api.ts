import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '172b4ff6-60d5-4aca-b4a8-6169eeb66e32'
    }
});

export const usersAPI = {
    getUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowUser: (id: number) => {
        return instance.delete(`/follow/${id}`)
    },
    followUser: (id: number) => {
        return instance.post(`/follow/${id}`)
    },
}