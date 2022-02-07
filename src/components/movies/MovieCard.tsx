import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    max-width: 300px;
    width: 100%;

    max-height: 400px;
    height: 100%;

    border: 1px solid #dbdbdb;
    border-radius: 3px;
`

const ImageContainer = Styled.div`
    
`

const InfoContainer = Styled.div`

`

interface IMovieCardProps
{
    title: string;
    imageUrl: string;
}

export const MovieCard: React.FunctionComponent<IMovieCardProps> = (props) => {
    return (
        <Wrapper>

        </Wrapper>
    )
}