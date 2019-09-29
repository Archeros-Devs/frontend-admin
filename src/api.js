import axios from 'axios'
import { store, persistor } from './store/storage'

const api = axios.create({
    baseURL: 'http://localhost:21086/',
    //baseURL: 'http://peruibemelhor.nodejs7605.kinghost.net:21086/',
});

api.defaults.headers.common = {'Authorization': `Bearer ${store.getState().auth.token}`}

export default api;
