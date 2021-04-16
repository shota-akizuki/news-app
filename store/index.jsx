import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './reducers/user';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
//userをstoreに定義する
const rootReducer = combineReducers({
  user: userReducer,
});

//persistの設定
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
//storeを定義する
const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);
export default store;
