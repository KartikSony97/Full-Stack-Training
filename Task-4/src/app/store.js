//import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import { createStore } from "redux";
import {persistStore, persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
//import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: "root",
    storage,
}
const persistedReducer = persistReducer(persistConfig, userReducer)

const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); 


export default configureStore({
    reducer:{
        user:persistedReducer,
    },
});

export const persistor = persistStore(store);
//export default store;