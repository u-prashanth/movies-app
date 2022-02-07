import type { NextPage } from 'next'
import Head from 'next/head'
import Styled from 'styled-components';
import { Navbar, Page } from '../components';

const Container = Styled.div`
	width: 100%:
	height: 100%;

	display: flex;
    align-items: center;
    justify-content: center;
`

const MovieCardContainer = Styled.div`
	width: 100%;
	height: 100%;

	padding: 30px;

	display: grid;
	grid-template-columns: repeat(8, minmax(100px, 400px));
	gap: 16px;
	align-items: center;
	justify-content: center;

	@media only screen and (max-width: 1500px)
	{
		grid-template-columns: repeat(7, minmax(100px, 300px));
	}

	@media only screen and (max-width: 1200px)
	{
		grid-template-columns: repeat(6, minmax(100px, 300px));
	}

	@media only screen and (max-width: 992px)
	{
		grid-template-columns: repeat(5, minmax(100px, 300px));
	}

	@media only screen and (max-width: 768px)
	{
		grid-template-columns: repeat(4, minmax(100px, 300px));
	}

	@media only screen and (max-width: 576px)
	{
		grid-template-columns: repeat(2, minmax(100px, 300px));
		padding: 10px;
	}
`

const MovieCard = Styled.div`
	min-width: 100px;

	display: flex;
	flex-direction: column;

	overflow: clip;

	border: 1px solid #eaeaeb;
	border-radius: 4px;
`

const MovieCardImage = Styled.img`
	width: 100%;
	// height: 200px;

	object-fit: contain;
`

const MovieInfoWrapper = Styled.div`
	width: 100%;
	height: auto;

	background-color: #fff;

	padding: 16px;
`


const Home: NextPage = () => {
	return (
		<Page title='Incredible Movies'>
			<Container>
			<MovieCardContainer>
				<MovieCard>
					<MovieCardImage src='https://image.tmdb.org/t/p/w500/cVn8E3Fxbi8HzYYtaSfsblYC4gl.jpg'/>
					<MovieInfoWrapper>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
					</MovieInfoWrapper>
				</MovieCard>

				<MovieCard>
					<MovieCardImage src='https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg'/>
					<MovieInfoWrapper>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
					</MovieInfoWrapper>
				</MovieCard>

				<MovieCard>
					<MovieCardImage src='https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'/>
					<MovieInfoWrapper>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
					</MovieInfoWrapper>
				</MovieCard>

				<MovieCard>
					<MovieCardImage src='https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg'/>
					<MovieInfoWrapper>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
					</MovieInfoWrapper>
				</MovieCard>

				<MovieCard>
					<MovieCardImage src='https://image.tmdb.org/t/p/w500/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg'/>
					<MovieInfoWrapper>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
					</MovieInfoWrapper>
				</MovieCard>

				<MovieCard>
					<MovieCardImage src='https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg'/>
					<MovieInfoWrapper>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
					</MovieInfoWrapper>
				</MovieCard>

				<MovieCard>
					<MovieCardImage src='https://image.tmdb.org/t/p/w500/v3KCBeX0CBlZnHZndimm7taYqwo.jpg'/>
					<MovieInfoWrapper>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
					</MovieInfoWrapper>
				</MovieCard>

				<MovieCard>
					<MovieCardImage src='https://image.tmdb.org/t/p/w500/v3KCBeX0CBlZnHZndimm7taYqwo.jpg'/>
					<MovieInfoWrapper>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
					</MovieInfoWrapper>
				</MovieCard>
			</MovieCardContainer>
			</Container>
		</Page>
	)
}

export default Home;