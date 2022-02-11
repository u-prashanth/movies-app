import React from 'react';
import Styled from 'styled-components';
import moment from 'moment';

import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import Icon from '@mdi/react';
import { mdiMagnify  } from '@mdi/js';

import { IGenre, IMovie } from '../interface';
import { Button, Dropdown, MovieCard, MovieThumbnailSection, Page, SearchFiltersSection } from '../components';
import { GetPopularMoviesService, SearchMovieService } from '../services';

// Redux
import { setGenres, setSearchResults } from '../redux';
import { useAppDispatch, useAppSelector } from '../redux/reduxHook';
import { GetGenreDetailsService } from '../services/GetGenreDetailsService';


const Container = Styled.div`
	width: 100%:
	height: 100%;

	background-color: #212121;

	display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: center;
`

const FiltersWrapper = Styled.div`
    width: 100%;

    padding: 0px 60px;
    padding-top: 30px;

    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;

    & > *
    {
        margin-right: 16px;
    }

    @media only screen and (max-width: 800px)
    {
        padding: 0px 30px;
        padding-top: 30px;
    }
`

interface ISearchProps extends GetServerSideProps
{
    searchResults: IMovie[];
    genres: IGenre[];
}

export const Search: React.FunctionComponent<ISearchProps> = (props) => {

    // Dispatch
	const dispatch = useAppDispatch();

    // Component State
    const [ selectedGenreId, setSelectedGenreId ] = React.useState(undefined as unknown as number | undefined);
    const [ selectedGenre, setSelectedGenre ] = React.useState('');
    const [ selectedYear, setSelectedYear ] = React.useState('');
    const [ selectedRating, setSelectedRating ] = React.useState('');
    const [ filteredResults, setFilteredResults ] = React.useState([] as unknown as IMovie[]);

	// Redux State
	const { searchResults, genres } = useAppSelector(state => state.movies);

    React.useEffect(() => {
        dispatch(setSearchResults(props.searchResults));
        dispatch(setGenres(props.genres))
    }, [props])

    React.useEffect(() => {
        filterResults(selectedGenreId);
    }, [selectedGenreId, selectedGenre, selectedYear, selectedRating])

    React.useEffect(() => {
        console.log(filteredResults);
    }, [filteredResults])


    const handleGenreSelection = (genre: string) => {
        setSelectedGenre(genre);
        setSelectedGenreId(genres.find(g => g.name === genre)?.id!)
    }

    const handleSelectedYear = (value: string) => {
        setSelectedYear(value);
    }

    const handleSelectedRating = (value: string) => {
        setSelectedRating(value);
    }

    const handleResetFilters = () => {
        setSelectedGenreId(undefined);
        setSelectedGenre('');
        setSelectedYear('');
        setSelectedRating('');
    }

    const filterResults = (genreId?: number) => {
        setFilteredResults(
            searchResults.filter(movies => genreId !== undefined ? movies.genre_ids?.includes(genreId) : movies).filter(movies => selectedYear !== '' ? moment(movies.release_date, "YYYY-MM-DD").year().toString() === selectedYear : movies).filter(movies => selectedRating !== '' ? parseFloat(selectedRating) <= movies.vote_average! : movies)
        );
    }
    

    return (
        <Page title='Netflix | Search Results' enableTopPadding>
            <Container>
                
                {
                    genres.length &&
                    <SearchFiltersSection>
                        <FiltersWrapper>
                            <Dropdown 
                                value={selectedGenre}
                                placeholder='Choose Genre'
                                defaultValue=''
                                options={genres.map(genre => genre.name)}
                                onChange={e => handleGenreSelection(e.target.value)}
                            />

                            <Dropdown 
                                value={selectedYear}
                                placeholder='Select Year'
                                defaultValue=''
                                options={
                                    ['2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000']
                                }
                                onChange={e => handleSelectedYear(e.target.value)}
                            />

                            <Dropdown 
                                value={selectedRating}
                                placeholder='Rating'
                                defaultValue=''
                                options={
                                    ['9+', '8+', '7+', '6+', '5+', '4+', '3+', '2+', '1+']
                                }
                                onChange={e => handleSelectedRating(e.target.value)}
                            />

                            <Button onClick={handleResetFilters}>Clear Filters</Button>
                        </FiltersWrapper>
                    </SearchFiltersSection>
                }

                <MovieThumbnailSection title="Here's what we found">
                    {
                        filteredResults.length ?
                        filteredResults.map((movie, i) => (
                            <MovieCard key={i} movie={movie}/>
						))
                        :
						searchResults.map((movie, i) => (
                            <MovieCard key={i} movie={movie}/>
						))
					}
                </MovieThumbnailSection>
            </Container>
        </Page>
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {

    let genreResults = await GetGenreDetailsService();
    let result = ctx.query.q === '' ? await GetPopularMoviesService() : await SearchMovieService(ctx.query.q! as string);

    return {
        props: {
            searchResults: JSON.parse(JSON.stringify(result.data.results)),
            genres: JSON.parse(JSON.stringify(genreResults.data.genres)) as IGenre
        }
    }
}

export default Search;