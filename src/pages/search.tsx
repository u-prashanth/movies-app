import React from 'react';
import Styled from 'styled-components';
import moment from 'moment';

import { useRouter } from 'next/router';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { IGenre, IMovie } from '../interface';
import { Dropdown, MovieCard, MovieThumbnailSection, Page, SearchFiltersSection } from '../components';
import { GetPopularMoviesService, SearchMovieService } from '../services';

// Redux
import { setGenres, setSearchResults, setSearchTerm } from '../redux';
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

const NoMoviesFoundSection = Styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 100px;
`

interface ISearchProps extends GetServerSideProps
{
    searchResults: IMovie[];
    genres: IGenre[];
}

export const Search: React.FunctionComponent<ISearchProps> = (props) => {

    const router = useRouter();

    // Dispatch
	const dispatch = useAppDispatch();

    // Component State
    const [ selectedGenreId, setSelectedGenreId ] = React.useState(undefined as unknown as number | undefined);
    const [ selectedGenre, setSelectedGenre ] = React.useState('');
    const [ selectedYear, setSelectedYear ] = React.useState('');
    const [ selectedRating, setSelectedRating ] = React.useState('');

	// Redux State
	const { searchResults, genres, searchTerm } = useAppSelector(state => state.movies);

    React.useEffect(() => {
        dispatch(setSearchResults(props.searchResults));
        dispatch(setGenres(props.genres))

        if(router.query.q !== '') dispatch(setSearchTerm(router.query.q));

        if((router.query.genre !== undefined) || (router.query.genre && router.query.genre !== ''))
        {
            setSelectedGenre(genres.find(g => g.id === parseInt(router.query.genre as string))?.name!);
            setSelectedGenreId(parseInt(router.query.genre as string))
        }
        
        if((router.query.year !== undefined) || (router.query.year && router.query.year !== ''))
        {
            setSelectedYear(router.query.year as string);
        }

        if((router.query.rating !== undefined) || (router.query.rating && router.query.rating !== ''))
        {
            setSelectedRating(router.query.rating as string + '+');
        }

    }, [props, router.isReady, selectedGenreId, selectedGenre, selectedYear, selectedRating, searchResults])


    const handleGenreSelection = (genre: string) => {
        router.push(`${searchTerm !== ('' || undefined) ? `search?q=${searchTerm}` : 'search?'}${genre !== '' ? `&genre=${genres.find(g => g.name === genre)?.id!}` : ''}${selectedYear !== '' ? `&year=${selectedYear}` : ''}${selectedRating !== '' ? `&rating=${selectedRating}` : ''}`);
    }

    const handleSelectedYear = (value: string) => {
        setSelectedYear(value);

        router.push(`${searchTerm !== ('' || undefined) ? `search?q=${searchTerm}` : 'search?'}${selectedGenreId !== (null || undefined) ? `&genre=${selectedGenreId}` : ''}${value !== '' ? `&year=${value}` : ''}${selectedRating !== '' ? `&rating=${selectedRating}` : ''}`);
    }

    const handleSelectedRating = (value: string) => {
        setSelectedRating(value);

        router.push(`${searchTerm !== ('' || undefined) ? `search?q=${searchTerm}` : 'search?'}${selectedGenreId !== (null || undefined) ? `&genre=${selectedGenreId}` : ''}${selectedYear !== '' ? `&year=${selectedYear}` : ''}${value !== '' ? `&rating=${parseInt(value)}` : ''}`);
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
                        </FiltersWrapper>
                    </SearchFiltersSection>
                }

                {
                    searchResults.length > 0 ?
                    <MovieThumbnailSection title="Here's what we found">
                        {
                            searchResults.filter(movies => selectedGenreId !== undefined ? movies.genre_ids?.includes(selectedGenreId) : movies).filter(movies => selectedYear !== '' ? moment(movies.release_date, "YYYY-MM-DD").year().toString() === selectedYear : movies).filter(movies => selectedRating !== '' ? parseFloat(selectedRating) < movies.vote_average! : movies).map((movie, i) => (
                                <MovieCard key={i} movie={movie}/>
                            ))
                        }
                    </MovieThumbnailSection>
                    :
                    <NoMoviesFoundSection>
                        <span style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>No Movies found!</span>
                    </NoMoviesFoundSection>   
                }
            </Container>
        </Page>
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {

    let genreResults = await GetGenreDetailsService();
    let result = ctx.query.q === ('' || undefined) ? await GetPopularMoviesService() : await SearchMovieService(ctx.query.q! as string);

    return {
        props: {
            searchResults: JSON.parse(JSON.stringify(result.data.results)),
            genres: JSON.parse(JSON.stringify(genreResults.data.genres)) as IGenre
        }
    }
}

export default Search;