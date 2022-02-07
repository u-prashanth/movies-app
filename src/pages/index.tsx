import type { NextPage } from 'next'
import Styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiPlay, mdiInformationOutline } from '@mdi/js';
import { Button, Page } from '../components';

const Container = Styled.div`
	width: 100%:
	height: 100%;

	background-color: #212121;

	display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: center;
`

const MovieCardContainer = Styled.div`
	width: 100%;
	height: 100%;

	padding: 44px;

	margin-top: -100px;

	position: relative;
	z-index: 1;

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
		margin-top: -20px;
	}
`

const MovieCard = Styled.div`
	min-width: 100px;

	display: flex;
	flex-direction: column;

	overflow: clip;
	border-radius: .2vw;
`

const MovieCardImage = Styled.img`
	width: 100%;
	// height: 200px;

	object-fit: contain;
`

// const MovieInfoWrapper = Styled.div`
// 	width: 100%;
// 	height: auto;

// 	background-color: #fff;

// 	padding: 16px;
// `

const BackdropContainer = Styled.div`
	width: 100%;
	height: 90vh;

	position: relative;
	z-index: 0;

	display: flex;
	align-items: center;

	padding: 60px;

	@media only screen and (max-width: 576px)
	{
		padding: 16px;
		height: 30vh;
	}
`

const Backdrop = Styled.div`
	width: 100%;
	height: 100%;

	object-fit: cover;

	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;

	// background: linear-gradient(to bottom, rgba(33,33,33,0) 0%, rgba(33,33,33,0.23) 45%, rgba(33,33,33,1) 100%), url('https://image.tmdb.org/t/p/original/v5CEt88iDsuoMaW1Q5Msu9UZdEt.jpg') no-repeat;

	background: url('https://image.tmdb.org/t/p/original/v5CEt88iDsuoMaW1Q5Msu9UZdEt.jpg') no-repeat;
	background: -moz-linear-gradient(top, rgba(33,33,33,0) 0%, rgba(33,33,33,0.71) 80%, rgba(33,33,33,1) 100%), url('https://image.tmdb.org/t/p/original/v5CEt88iDsuoMaW1Q5Msu9UZdEt.jpg') no-repeat;

	background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(33,33,33,0)), color-stop(80%, rgba(33,33,33,0.71)), color-stop(100%, rgba(33,33,33,1))), url('https://image.tmdb.org/t/p/original/v5CEt88iDsuoMaW1Q5Msu9UZdEt.jpg') no-repeat;

	background: -webkit-linear-gradient(top, rgba(33,33,33,0) 0%, rgba(33,33,33,0.71) 80%, rgba(33,33,33,1) 100%), url('https://image.tmdb.org/t/p/original/v5CEt88iDsuoMaW1Q5Msu9UZdEt.jpg') no-repeat;

	background: -o-linear-gradient(top, rgba(33,33,33,0) 0%, rgba(33,33,33,0.71) 80%, rgba(33,33,33,1) 100%), url('https://image.tmdb.org/t/p/original/v5CEt88iDsuoMaW1Q5Msu9UZdEt.jpg') no-repeat;

	background: -ms-linear-gradient(top, rgba(33,33,33,0) 0%, rgba(33,33,33,0.71) 80%, rgba(33,33,33,1) 100%), url('https://image.tmdb.org/t/p/original/v5CEt88iDsuoMaW1Q5Msu9UZdEt.jpg') no-repeat;

	background: linear-gradient(to bottom, rgba(33,33,33,0) 0%, rgba(33,33,33,0.71) 80%, rgba(33,33,33,1) 100%), url('https://image.tmdb.org/t/p/original/v5CEt88iDsuoMaW1Q5Msu9UZdEt.jpg') no-repeat;

	background-size: cover;
	background-position: center;
`


const MovieInfoWrapper = Styled.div`
	width: 50%;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
`

const MovieTitle = Styled.span`
	color: #fff;
	font-size: 60px;
	font-weight: 900;

	position: relative;
	z-index: 1;

	@media only screen and (max-width: 576px)
	{
		font-size: 20px;
	}
`

const MovieDescription = Styled.p`
	color: #fff;
	font-size: 20px;
	font-weight: 400;
	margin-top: 16px;

	position: relative;
	z-index: 1;
`

const ButtonContainer = Styled.div`
	width: 100%;
	position: relative;
	z-index: 1;
	
	display: flex;
	align-items: center;

	margin-top: 16px;

	& > *
	{
		margin-right: 8px;
	}
`


const Home: NextPage = () => {
	return (
		<Page title='Incredible Movies'>
			<Container>
				<BackdropContainer>
					<Backdrop />
					<MovieInfoWrapper>
						<MovieTitle>Your Eyes Tell</MovieTitle>
						<MovieDescription>
							A tragic accident lead to Kaori's blindness, but she clings to life and the smaller pleasures it can still afford her. She meets Rui and begins to talk to him. Rui was once a promising kickboxer, but something happened in his past. Kaori's smile brings out a change in Rui. However, the two are connected in more than one way. Rui attempts to do what is right.
						</MovieDescription>

						<ButtonContainer>
							<Button>
								<Icon path={mdiPlay} size={1.4} color="#000"/> Play
							</Button>

							<Button buttonStyle='secondary'>
							<Icon path={mdiInformationOutline} size={1.4} color="#fff"/> More Info
							</Button>
						</ButtonContainer>
					</MovieInfoWrapper>
				</BackdropContainer>
				<MovieCardContainer>
					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/cVn8E3Fxbi8HzYYtaSfsblYC4gl.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/v3KCBeX0CBlZnHZndimm7taYqwo.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/cVn8E3Fxbi8HzYYtaSfsblYC4gl.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/v3KCBeX0CBlZnHZndimm7taYqwo.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/cVn8E3Fxbi8HzYYtaSfsblYC4gl.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/eEslKSwcqmiNS6va24Pbxf2UKmJ.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/v3KCBeX0CBlZnHZndimm7taYqwo.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>

					<MovieCard>
						<MovieCardImage src='https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg'/>
						{/* <MovieInfoWrapper>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
						</MovieInfoWrapper> */}
					</MovieCard>
				</MovieCardContainer>
			</Container>
		</Page>
	)
}

export default Home;