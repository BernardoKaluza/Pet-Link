import {configureStore} from '@reduxjs/toolkit';
import  CaesReducer   from '../features/caes/CaesSlice';



export const store = configureStore({
    reducer: {
        caes: CaesReducer,
    }
});