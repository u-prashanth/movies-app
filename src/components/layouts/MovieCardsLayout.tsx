import React from 'react';
import Styled from 'styled-components';

const MovieCardContainer = Styled.div`
	width: 100%:
	height: 100%;

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

interface IMovieCardsLayoutProps
{
    sectionName: string;
}

export class MovieCardsLayout extends React.Component<IMovieCardsLayoutProps,{}>
{
    constructor(props: IMovieCardsLayoutProps)
    {
        super(props);
    }

    render()
    {
        return (
            <MovieCardContainer>
                <MovieSectionTitle>{this.props.sectionName}</MovieSectionTitle>
                <MovieCardsWrapper>
                    {this.props.children}
                </MovieCardsWrapper>
            </MovieCardContainer>
        )
    }
}