import * as axios from "axios";

export let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'}
});

export const AuthAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password) {
        return instance.post('auth/login', {
            email: email,
            password: password,
            rememberMe: true
        });
    },
    logout() {
        return instance.post('auth/logout')
    },
    setAPIKey(key) {
        instance = axios.create({
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0/',
            headers: {'API-KEY': key}
        });
    },

};
