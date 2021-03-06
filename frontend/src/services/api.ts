import axios from "axios";

const api = axios.create({
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
    baseURL: "https://forumseila.herokuapp.com"
    
});

export default api;