import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import apiReducer from '../features/api/apiSlice'


export default configureStore({
    reducer: {
        api: apiReducer
    },
})