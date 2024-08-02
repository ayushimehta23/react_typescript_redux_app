import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk'; 
import rootReducer from './redux/reducers'; 

// Configure the store
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware: any) =>
        getDefaultMiddleware().concat(thunk), 
    devTools: process.env.NODE_ENV !== 'production',
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
