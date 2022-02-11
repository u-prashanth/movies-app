import { createSlice } from '@reduxjs/toolkit';
import { IMovie } from '../../interface';

interface IMovieState
{
    popularMovies: IMovie[];
    searchResults: IMovie[];
}

const initialState: IMovieState = {
    popularMovies: [],
    searchResults: []
}

const moviesReducer = createSlice({
    name: 'popularMovies',
    initialState,
    reducers: {
        setPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        setSearchResults: (state, action) => {
            state.searchResults = action.payload;
        }
    }
})

export const { setPopularMovies, setSearchResults } = moviesReducer.actions;
export default moviesReducer.reducer;