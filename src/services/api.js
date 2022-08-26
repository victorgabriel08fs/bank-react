import axios from 'axios';

const api = axios.create({
    baseURL:'http://victor-bank-api.herokuapp.com/api/v1/'
});

export default api;