import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
	width: 100%;
	height: 80vh;
	position: relative;
	z-index: 0;
	display: flex;
	align-items: center;
	padding: 60px;

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
		padding: 16px;
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

interface IMovieBackdropProps
{
    backdropURL: string;
}

export const MovieBackdrop: React.FunctionComponent<IMovieBackdropProps> = (props) => {
    return (
        <Container>
            <Backdrop backdropURL={props.backdropURL}/>
        </Container>
    )
}