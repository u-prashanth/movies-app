import axios from 'axios';

export const GetGenreDetailsService = async() => {
    return await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=8dc5ab4cbeee685d76ab97a9f22bf7ea&language=en-US`);
}