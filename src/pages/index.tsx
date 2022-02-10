import React from 'react';
import Styled from 'styled-components';

import Link from 'next/link';
import type { GetServerSidePropsContext, GetStaticProps } from 'next'


import { Button, Dropdown, FeaturedMovieSection, MovieCard, MovieThumbnailSection, Page, TextField } from '../components';
import { IMovie, IMovieData } from '../interface';
import { GetPopularMoviesService } from '../services';

// Redux
import { useAppDispatch, useAppSelector } from '../redux/reduxHook';
import { setPopularMovies } from '../redux';



const Container = Styled.div`
	width: 100%:
	height: 100%;

	background-color: #212121;

	display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: center;
`

const WrapWithMarginTop = Styled.div`
	margin-top: -120px;

	@media only screen and (max-width: 576px)
	{
		margin-top: -80px;
	}
`

interface IHomeProps
{
	popularMovies: IMovie[];
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {

	// Dispatch
	const dispatch = useAppDispatch();

	// Redux State
	const movies = useAppSelector(state => state.movies.popularMovies);
	
	React.useEffect(() => {
		dispatch(setPopularMovies(props.popularMovies));
		console.log(Math.floor(Math.random() * movies.length))
	}, [movies])

	return (
		<Page title='Incredible Movies'>
			{
				movies.length &&
				<Container>
					<FeaturedMovieSection movie={movies[Math.floor(Math.random() * movies.length)]} />

					<WrapWithMarginTop>
						<MovieThumbnailSection title='Popular'>
							{
								movies.map((movie, i) => (
									<MovieCard key={i} movie={movie}/>
								))
							}
						</MovieThumbnailSection>
					</WrapWithMarginTop>
				</Container>
			}
		</Page>
	)
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    return {
        props: {
            popularMovies: JSON.parse(JSON.stringify(await (await GetPopularMoviesService()).data.results))
        }
    }
}

export default Home;