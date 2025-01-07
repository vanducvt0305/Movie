import Axios from "axios";
import { DOMAIN, TOKEN_CYBERSOFT } from '../Services/constant';

export class baseService {
    put = (url, model) => {
        const token = localStorage.getItem(TOKEN_CYBERSOFT);
        if (!token) {
            console.error("Token not found in localStorage");
            // Có thể chuyển hướng người dùng tới trang đăng nhập nếu không có token
            // window.location.href = '/login'; 
            return;
        }

        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'PUT',
            data: model,
            headers: { 'Authorization': 'Bearer ' + token }
        });
    }

    post = (url, model) => {
        const token = localStorage.getItem(TOKEN_CYBERSOFT);
        if (!token) {
            console.error("Token not found in localStorage");
            // window.location.href = '/login'; 
            return;
        }

        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'POST',
            data: model,
            headers: { 'Authorization': 'Bearer ' + token }
        });
    }

    get = (url) => {
        const token = localStorage.getItem(TOKEN_CYBERSOFT);
        if (!token) {
            console.error("Token not found in localStorage");
            // window.location.href = '/login'; 
            return;
        }

        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });
    }

    delete = (url) => {
        const token = localStorage.getItem(TOKEN_CYBERSOFT);
        if (!token) {
            console.error("Token not found in localStorage");
            // window.location.href = '/login'; 
            return;
        }

        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + token }
        });
    }
}