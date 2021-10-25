import axios from "axios";

const api = axios.create({
    //baseURL: 'http://localhost:3000',  MAC OS
    baseURL: 'http://10.0.2.2:3000', // Emulador Android
   // baseURL: 'http://10.0.3.2:3000',  Android
    // baseURL: 'http://10.0.2.2:3000', substitui por IP local
});

export default api;