import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
	width: 100%:
	height: 100%;

	padding: 60px;

	@media only screen and (max-width: 800px)
	{
		padding: 40px;
	}

	@media only screen and (max-width: 576px)
	{
		padding: 16px;
	}
`

const ThumbnailsWrapper = Styled.div`
	width: 100%;
	height: 100%;

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
	}
`

const SectionTitle = Styled.h2`
	font-size: 1.4vw;
	font-weight: 700;
	color: #fff;

	position: relative;
	z-index: 1;

	margin-bottom: 16px;

	@media only screen and (max-width: 800px)
	{
		font-size: 12px;
	}
`

interface IMovieThumbnailSectionProps extends React.HTMLAttributes<HTMLDivElement>
{
    title: string;
}

export const MovieThumbnailSection: React.FunctionComponent<IMovieThumbnailSectionProps> = (props) => {
	return (
		<Container {...props}>
			<SectionTitle>{props.title}</SectionTitle>
			<ThumbnailsWrapper>
				{props.children}
			</ThumbnailsWrapper>
		</Container>
	)
}