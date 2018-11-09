import axios from 'axios';
//10.0.2.2:3000 android studio
//10.0.3.2:3000 genymotion
//localhost ios
const api = axios.create({
    baseURL: 'http://10.0.3.2:3000'
});

export default api;