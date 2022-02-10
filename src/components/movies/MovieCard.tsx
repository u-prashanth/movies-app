import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Styled from 'styled-components';

import { IMovie } from '../../interface';

const Container = Styled.div`
    min-width: 100px;

    position: relative;
    z-index: 10;

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

interface IMovieCardProps extends React.HTMLAttributes<HTMLDivElement>
{
    movie: IMovie;
}

export const MovieCard: React.FunctionComponent<IMovieCardProps> = (props) => {
    return (
        <Link href={`/movie?id=${props.movie.id}`} passHref>
			<Container>
                <Image about='nothing' width="100%" height="150px" layout='responsive' alt={props.movie.title} src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}/>
            </Container>					
        </Link>
    )
}