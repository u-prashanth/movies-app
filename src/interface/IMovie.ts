export interface IMovie
{
    id?:                    number;
    title?:                 string;
    video?:                 boolean;
    overview?:              string;
    genre_ids?:             number[];
    popularity?:            number;
    vote_count?:            number;
    poster_path?:           string;
    release_date?:          string;
    vote_average?:          number;
    backdrop_path?:         string;
    original_title?:        string;
    original_language?:     string;
}