import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './reducer/moviesReducer';
import queryReducer from './reducer/queryReducer';

export const store = configureStore({
    reducer: {
        query: queryReducer,
        movies: moviesReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;