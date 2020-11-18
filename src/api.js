import axios from 'axios'
import { store } from './store/storage'

const api = () => {
    let token = store.getState().auth.token

    return axios.create({
        headers: { 'Authorization': `Bearer ${token}` },
        baseURL:  'http://backend-peruibe-melhor.us-east-1.elasticbeanstalk.com/',
        //baseURL:  'http://localhost:8082/'
    })
};

export default api;