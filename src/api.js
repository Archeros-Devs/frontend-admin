import axios from 'axios'
import { store, persistor } from './store/storage'

const api = axios.create({
    baseURL: 'http://peruibemelhor.nodejs7605.kinghost.net:21086/',
    //headers: {'X-Custom-Header': 'foobar'}
    //axios.defaults.baseURL = 'http://peruibemelhor.nodejs7605.kinghost.net:21086/'
    //axios.defaults.headers.common = {'Authorization': `Bearer ${props.token}`}
});

api.defaults.headers.common = {'Authorization': `Bearer ${store.getState().token}`}

export default api;
