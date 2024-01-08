import {configureStore} from '@reduxjs/toolkit';
import DataSlice from './../slice/dataSlice';

export const Store = configureStore({
    reducer:{
        // name : file
        data:DataSlice
    }
})