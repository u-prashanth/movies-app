import axios from 'axios';

export const SearchMovieService = async(searchTerm: string) => {
    return await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8dc5ab4cbeee685d76ab97a9f22bf7ea&language=en-US&query=${searchTerm}&page=1&include_adult=false`);
}