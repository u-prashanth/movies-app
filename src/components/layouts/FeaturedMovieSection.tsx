import React from 'react';
import Styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiInformationOutline } from '@mdi/js';
import { Button } from '..';
import { IMovie } from '../../interface';
import Link from 'next/link';

const Container = Styled.div`
	width: 100%;
	height: 90vh;
	position: relative;
	z-index: 0;
	display: flex;
	align-items: center;
	padding: 60px;

    @media only screen and (max-width: 1400px)
	{
		height: 80vh;
	}

    @media only screen and (max-width: 1200px)
	{
		height: 70vh;
	}

    @media only screen and (max-width: 1024px)
	{
		height: 60vh;
	}

    @media only screen and (max-width: 800px)
	{
        padding: 40px;
		height: 50vh;
	}

	@media only screen and (max-width: 576px)
	{
		padding: 20px;
		height: 40vh;
	}
`

const Backdrop = Styled.div<{ backdropURL?: string }>`
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;

	background: url('https://image.tmdb.org/t/p/original${props => props.backdropURL}') no-repeat;
	background: -moz-linear-gradient(top, rgba(33,33,33,0) 0%, rgba(33,33,33,0.71) 80%, rgba(33,33,33,1) 100%), url('https://image.tmdb.org/t/p/original${props => props.backdropURL}') no-repeat;
	background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(33,33,33,0)), color-stop(80%, rgba(33,33,33,0.71)), color-stop(100%, rgba(33,33,33,1))), url('https://image.tmdb.org/t/p/original${props => props.backdropURL}') no-repeat;
	background: -webkit-linear-gradient(top, rgba(33,33,33,0) 0%, rgba(33,33,33,0.71) 80%, rgba(33,33,33,1) 100%), url('https://image.tmdb.org/t/p/original${props => props.backdropURL}') no-repeat;
	background: -o-linear-gradient(top, rgba(33,33,33,0) 0%, rgba(33,33,33,0.71) 80%, rgba(33,33,33,1) 100%), url('https://image.tmdb.org/t/p/original${props => props.backdropURL}') no-repeat;
	background: -ms-linear-gradient(top, rgba(33,33,33,0) 0%, rgba(33,33,33,0.71) 80%, rgba(33,33,33,1) 100%), url('https://image.tmdb.org/t/p/original${props => props.backdropURL}') no-repeat;
	background: linear-gradient(to bottom, rgba(33,33,33,0) 0%, rgba(33,33,33,0.71) 80%, rgba(33,33,33,1) 100%), url('https://image.tmdb.org/t/p/original${props => props.backdropURL}') no-repeat;
	
    background-position: top;
	background-size: cover;
`

const GradientBox = Styled.div`
    width: 70%;
    height: 100%;

    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;

    background: -webkit-linear-gradient(13deg,rgba(33,33,33,0.71) 0,rgba(0,0,0,0) 85%);
    background: -moz- oldlinear-gradient(13deg,rgba(33,33,33,0.71) 0,rgba(0,0,0,0) 85%);
    background: -o-linear-gradient(13deg,rgba(33,33,33,0.71) 0,rgba(0,0,0,0) 85%);
    background: linear-gradient(77deg,rgba(33,33,33,0.71) 0,rgba(0,0,0,0) 85%);
`

const MovieInfoWrapper = Styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

    position: relative;
    z-index: 10;
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
	font-weight: 400;
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
`

interface IFeaturedMovieSectionProps
{
    movie: IMovie;
}

export const FeaturedMovieSection: React.FunctionComponent<IFeaturedMovieSectionProps> = (props) => {

    const { id, title, overview, backdrop_path } = props.movie;

    return (
        <Container>
            <Backdrop backdropURL={backdrop_path}/>
            <GradientBox />
            <MovieInfoWrapper>
                <MovieTitle>{title}</MovieTitle>
                <MovieDescription>{overview}</MovieDescription>

                <ButtonContainer>
                    <Link passHref href={`/movie?id=${id}`}>
                        <Button buttonStyle='secondary' icon={<Icon path={mdiInformationOutline} size={0.7} color="#fff"/>}>
                            More Info
                        </Button>
                    </Link>
                </ButtonContainer>
            </MovieInfoWrapper>
        </Container>
    )
}