import { createSlice } from '@reduxjs/toolkit';
import { IGenre, IMovie } from '../../interface';

interface IMovieState
{
    popularMovies: IMovie[];
    searchResults: IMovie[];
    genres: IGenre[];
    searchTerm: string;
}

const initialState: IMovieState = {
    popularMovies: [],
    searchResults: [],
    genres: [],
    searchTerm: ''
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
        },
        setGenres: (state, action) => {
            state.genres = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    }
})

export const { setPopularMovies, setSearchResults, setGenres, setSearchTerm } = moviesReducer.actions;
export default moviesReducer.reducer;