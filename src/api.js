import axios from 'axios'
import { store } from './store/storage'

const api = () => {
    let token = store.getState().auth.token

    return axios.create({
        headers: { 'Authorization': `Bearer ${token}` },
        baseURL: document.location.hostname === 'localhost'
            ? 'http://localhost:21086/'
            : 'http://peruibemelhor.nodejs7605.kinghost.net:21086/',
    })
};

export default api;