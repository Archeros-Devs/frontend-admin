import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import reducer from './reducers/reducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}

const _persistReducer = persistReducer(persistConfig, reducer)

const store = createStore(_persistReducer);
const persistor = persistStore(store)

export { store, persistor }