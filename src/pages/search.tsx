import React from 'react';
import Styled from 'styled-components';

import Link from 'next/link';
import Image from 'next/image';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { NextRouter, withRouter } from 'next/router';

import Icon from '@mdi/react';
import { mdiMagnify  } from '@mdi/js';

import { IMovie, IMovieData } from '../interface';
import { Button, Dropdown, MovieCard, MovieThumbnailSection, Page, TextField } from '../components';
import { GetPopularMoviesService, SearchMovieService } from '../services';

// Redux
import { setSearchResults } from '../redux';
import { useAppDispatch, useAppSelector } from '../redux/reduxHook';


const Container = Styled.div`
	width: 100%:
	height: 100%;

	background-color: #212121;

	display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: center;
`

interface ISearchProps extends GetServerSideProps
{
    searchResults: IMovie[];
}

export const Search: React.FunctionComponent<ISearchProps> = (props) => {

    // Dispatch
	const dispatch = useAppDispatch();

	// Redux State
	const movies = useAppSelector(state => state.movies.searchResults);

    React.useEffect(() => {
        dispatch(setSearchResults(props.searchResults));
    }, [props.searchResults])

    return (
        <Page title='Netflix | Search Results' enableTopPadding>
            <Container>
                <MovieThumbnailSection title="Here's what we found">
                    {
						movies.map((movie, i) => (
                            <MovieCard key={i} movie={movie}/>
						))
					}
                </MovieThumbnailSection>
            </Container>
        </Page>
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {

    let result = ctx.query.movie === '' ? await GetPopularMoviesService() : await SearchMovieService(ctx.query.movie! as string);

    return {
        props: {
            searchResults: JSON.parse(JSON.stringify(result.data.results))
        }
    }
}

export default Search;