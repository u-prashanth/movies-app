import React from 'react';
import Styled from 'styled-components';

import Link from 'next/link';
import Image from 'next/image';
import type { GetServerSidePropsContext, GetStaticProps } from 'next'

import Icon from '@mdi/react';
import { mdiMagnify  } from '@mdi/js';

import { Button, Dropdown, FeaturedMovieSection, MovieThumbnailSection, Page, TextField } from '../components';
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

const MovieCardContainer = Styled.div`
	width: 100%:
	height: 100%;

	// margin-top: -100px;

	@media only screen and (max-width: 576px)
	{
		margin-top: -50px;
	}
`

const MovieCardsWrapper = Styled.div`
	width: 100%;
	height: 100%;

	padding: 16px 44px;

	position: relative;
	z-index: 1;

	display: grid;
	grid-template-columns: repeat(8, minmax(100px, 600px));
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
		grid-template-columns: repeat(3, minmax(100px, 200px));
		padding: 10px;
		margin-top: 8px;
	}
`

const MovieCard = Styled.div`
	min-width: 100px;

	display: flex;
	flex-direction: column;

	overflow: clip;
	border-radius: .2vw;

	cursor: pointer;

    &:hover
    {
        filter: brightness(1.1);
    }
`

const MovieCardImage = Styled.img`
	width: 100%;
	// height: 200px;

	object-fit: contain;
`

// const MovieSectionTitle = Styled.h2`
// 	font-size: 1.4vw;
// 	font-weight: 700;
// 	color: #fff;

// 	position: relative;
// 	z-index: 1;

// 	padding-left: 44px;

// 	@media only screen and (max-width: 800px)
// 	{
// 		font-size: 12px;
// 		padding-left: 16px;
// 	}
// `

const SearchBoxWrapper = Styled.div`
	max-width: 1024px;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;

	margin-bottom: 100px;

	padding: 0px 60px;

	@media only screen and (max-width: 576px)
	{
		padding: 0px 16px;
	}
`

const DropdownWrapper = Styled.div`
	width: 100%;
	margin-top: 8px;

	& > *
	{
		margin-right: 16px;
	}
`



interface IHomeProps extends GetServerSidePropsContext
{
    result: IMovieData[];
}

interface IState
{
    moviesData: IMovieData[];
    search: string;
    category: string;
    rating: string;
    year: string;
}

// class Home extends React.Component<IHomeProps, IState> 
// {
// 	constructor(props: IHomeProps)
// 	{
// 		super(props)

// 		this.state = {
//             moviesData: [],
//             search: '',
//             category: '',
//             rating: '',
//             year: ''
//         }
// 	}

// 	componentDidMount()
//     {
//         this.setMovieData(this.props.result);
// 		console.log(this.props.result);
//     }

// 	componentDidUpdate(prevProps: Readonly<IHomeProps> & Readonly<{ children?: React.ReactNode; }>)
//     {
//         if(this.props !== prevProps)
//             this.setMovieData(this.props.result);
//     }

// 	shouldComponentUpdate(prevProps: Readonly<IHomeProps> & Readonly<{ children?: React.ReactNode; }>)
//     {
//         return !(this.props !== prevProps);
//     }

// 	setMovieData = (value: IMovieData[]) => {
//         this.setState({ moviesData: value });
//     }

// 	handleSearchText = (value: string) => {
// 		this.setState({ search: value })
// 	}

// 	handleCategorySelection = (value: string) => {
// 		this.setState({ category: value });
// 	}

// 	handleYearSelection = (value: string) => {
// 		this.setState({ year: value });
// 	}

// 	handleRatingSelection = (value: string) => {
// 		this.setState({ rating: value });
// 	}

// 	render()
// 	{
// 		const { search, category, rating, year } = this.state;

// 		return (
// 			<Page title='Incredible Movies'>
// 				<Container>
// 					<SearchBoxWrapper>
// 						<div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
// 							<TextField 
// 								placeholder='Search Movies' 
// 								withIcon={<Icon path={mdiMagnify} size={0.6} color='#888'/>} 
// 								value={search}
// 								onChange={e => this.handleSearchText(e.target.value)}
// 							/>
	
// 							<div style={{ marginLeft: 8, display: 'flex' }}>
// 								<Link 
// 									href={`/search?movie=${search}&category=${category !== '' ? category : 'all'}&rating=${rating !== '' ? rating : 'all'}&year=${year !== '' ? year : 'all'}`}
// 									passHref
// 								>
// 									<Button>Search</Button>
// 								</Link>
// 							</div>
// 						</div>
// 						<DropdownWrapper style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
// 							<Dropdown
// 								placeholder='Category'
// 								value={category}
// 								options={
// 									[
// 										'Action',
// 										'Adventure',
// 										'Crime',
// 										'Comedy',
// 										'Horror',
// 										'Mystery',
// 										'Romance',
// 										'Thriller'
// 									]
// 								}
// 								onChange={e => this.handleCategorySelection(e.target.value)}
// 							/>
	
// 							<Dropdown
// 								placeholder='Rating'
// 								value={rating}
// 								options={
// 									[
// 										'9+',
// 										'8+',
// 										'7+',
// 										'6+',
// 										'5+',
// 										'4+',
// 										'3+',
// 										'2+',
// 										'1+'
// 									]
// 								}
// 								onChange={e => this.handleRatingSelection(e.target.value)}
// 							/>
	
// 							<Dropdown
// 								placeholder='Year'
// 								value={year}
// 								options={
// 									[
// 										'2022',
// 										'2021',
// 										'2020',
// 										'2019',
// 										'2018',
// 									]
// 								}
// 								onChange={e => this.handleYearSelection(e.target.value)}
// 							/>
// 						</DropdownWrapper>
// 					</SearchBoxWrapper>
	
// 					<MovieCardContainer>
// 						<MovieSectionTitle>Most Popular</MovieSectionTitle>
// 						<MovieCardsWrapper>
// 							{
// 								this.state.moviesData.map((movie, index) => (
// 									<Link href="/" passHref key={index}>
// 										<MovieCard>
// 											<Image width="100%" height="150px" layout='responsive' alt={movie.title} src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"/>
// 										</MovieCard>
// 									</Link>
// 								))
// 							}
// 						</MovieCardsWrapper>
// 					</MovieCardContainer>
// 				</Container>
// 			</Page>
// 		)
// 	}
// }

// export default Home;

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
				<FeaturedMovieSection>

				</FeaturedMovieSection>

				<MovieThumbnailSection title='Popular' style={{ marginTop: -120 }}>
					{
						movies.map((movie, i) => (
							<Link href="/" passHref key={i}>
								<MovieCard>
									<Image width="100%" height="150px" layout='responsive' alt="" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
								</MovieCard>
							</Link>
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