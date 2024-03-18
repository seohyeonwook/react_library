import axios from "axios";

const instance = axios.create({
    baseURL:"http://localhost:8080",
    headers: {
        Authorization: "Bearer " + localStorage.getItem("AccessToken")//모든요청이 토큰을 담아서 가져감    
    }
});

export default instance;