import axios from "axios";
const instance = axios.create({

    baseURL: 'http://localhost:8080/rental_system_war/'

})

export default instance;
