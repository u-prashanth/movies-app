import { configureStore } from '@reduxjs/toolkit'
import queryReducer from './reducer/queryReducer';

const store = configureStore({
    reducer: {
        query: queryReducer
    },
})

export default store;