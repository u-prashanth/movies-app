import React from 'react';
import Styled from 'styled-components';

import Link from 'next/link';
import type { GetServerSidePropsContext, GetStaticProps } from 'next'

import { Button, Dropdown, FeaturedMovieSection, MovieCard, MovieThumbnailSection, Page, TextField } from '../components';
import { IMovie, IMovieData } from '../interface';
import { GetPopularMoviesService } from '../services';



const Container = Styled.div`
	width: 100%:
	height: 100%;

	background-color: #212121;

	display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: center;
`

interface IHomeProps
{
	popularMovies: IMovie[];
}

const Home: React.FunctionComponent<IHomeProps> = (props) => {

	const [ movies, setMovies ] = React.useState([] as unknown as IMovie[]);
	
	React.useEffect(() => {
		setMovies(props.popularMovies);
	}, [props.popularMovies])

	return (
		<Page title='Incredible Movies'>
			<Container>
				<FeaturedMovieSection id={0} title={''} overview={''} backdropURL={''} />

				<MovieThumbnailSection title='Popular' style={{ marginTop: -120 }}>
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
    return {
        props: {
            popularMovies: JSON.parse(JSON.stringify(await (await GetPopularMoviesService()).data.results))
        }
    }
}

export default Home;