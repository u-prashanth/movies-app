import React from 'react';
import Styled from 'styled-components';

import Link from 'next/link';
import { useRouter } from 'next/router';
import type { GetServerSidePropsContext, NextPage } from 'next'

import Icon from '@mdi/react';
import { mdiMagnify  } from '@mdi/js';
import moment from 'moment';
import axios from 'axios';

import { Button, Dropdown, Page, TextField } from '../components';
import { IMovieData } from '../interface';



const Container = Styled.div`
	width: 100%:
	height: 100%;

	background-color: #212121;

	display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: center;

	padding-top: 120px;
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
	height: 60vh;

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
	font-size: 4vw;
	font-weight: 900;

	position: relative;
	z-index: 1;

	@media only screen and (max-width: 800px)
	{
		font-size: 14px;
	}
`

const MovieDescription = Styled.p`
	color: #fff;
	font-size: 1.4vw;
	font-weight: 500;
	margin-top: 16px;

	position: relative;
	z-index: 1;

	overflow: hidden;
    text-overflow: ellipsis;

	display: -webkit-box;
    line-clamp: 3; 
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

	@media only screen and (max-width: 800px)
	{
		font-size: 10px;
		margin-top: 8px;
	}
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

const MovieSectionTitle = Styled.h2`
	font-size: 1.4vw;
	font-weight: 700;
	color: #fff;

	position: relative;
	z-index: 1;

	padding-left: 44px;

	@media only screen and (max-width: 800px)
	{
		font-size: 12px;
		padding-left: 16px;
	}
`

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

const Home: NextPage = (props: any) => {
	const [ category, setCategory ] = React.useState('');
	const [ year, setYear ] = React.useState('');
	const [ rating, setRating ] = React.useState('');
	const [ search, setSearch ] = React.useState('');
	const [ moviesData, setMoviesData ] = React.useState([] as unknown as IMovieData[]);

	const router = useRouter();

	React.useEffect(() => {
		console.log('Query: ', JSON.parse(props.result))
		setMoviesData(JSON.parse(props.result) as IMovieData[]);
	}, [])

	const handleSearchText = (value: string) => {
		setSearch(value)
	}

	const handleCategorySelection = (value: string) => {
		setCategory(value);
	}

	const handleYearSelection = (value: string) => {
		setYear(value);
	}

	const handleRatingSelection = (value: string) => {
		setRating(value);
	}

	return (
		<Page title='Incredible Movies'>
			<Container>
				<SearchBoxWrapper>
					<div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
						<TextField 
							placeholder='Search Movies' 
							withIcon={<Icon path={mdiMagnify} size={0.6} color='#888'/>} 
							value={search}
							onChange={e => handleSearchText(e.target.value)}
						/>
						<div style={{ marginLeft: 8, display: 'flex' }}>
							<Link 
								href={`/search?movie=${search}&category=${category !== '' ? category : 'all'}&rating=${rating !== '' ? rating : 'all'}&year=${year !== '' ? year : 'all'}`}
							>
								<Button>Search</Button>
							</Link>
						</div>
					</div>
					<DropdownWrapper style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
						<Dropdown
							placeholder='Category'
							value={category}
							options={
								[
									'Action',
									'Adventure',
									'Crime',
									'Comedy',
									'Horror',
									'Mystery',
									'Romance',
									'Thriller'
								]
							}
							onChange={e => handleCategorySelection(e.target.value)}
						/>

						<Dropdown
							placeholder='Rating'
							value={rating}
							options={
								[
									'9+',
									'8+',
									'7+',
									'6+',
									'5+',
									'4+',
									'3+',
									'2+',
									'1+'
								]
							}
							onChange={e => handleRatingSelection(e.target.value)}
						/>

						<Dropdown
							placeholder='Year'
							value={year}
							options={
								[
									'2022',
									'2021',
									'2020',
									'2019',
									'2018',
								]
							}
							onChange={e => handleYearSelection(e.target.value)}
						/>
					</DropdownWrapper>
				</SearchBoxWrapper>

				<MovieCardContainer>
					<MovieSectionTitle>Most Popular</MovieSectionTitle>
					<MovieCardsWrapper>
						{
							moviesData.map((movie, index) => (
								<MovieCard key={index}>
									<MovieCardImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
									{/* <MovieInfoWrapper>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eaque.
									</MovieInfoWrapper> */}
								</MovieCard>
							))
						}
					</MovieCardsWrapper>
					

					
				</MovieCardContainer>
			</Container>
		</Page>
	)
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {

    let result = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=8dc5ab4cbeee685d76ab97a9f22bf7ea&language=en-US&page=1');

    return {
        props: {
            result: JSON.stringify(result.data.results)
        }
    }
}

export default Home;