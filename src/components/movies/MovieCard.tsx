import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    min-width: 100px;

    display: flex;
    flex-direction: column;

    overflow: clip;
    border-radius: .2vw;

    cursor: pointer;

    position: relative;
    z-index: 1;

    &:hover
    {
        filter: brightness(1.1);
    }
`

const Image = Styled.img`
    width: 100%;
    // height: 200px;

    object-fit: contain;
`

interface IMovieCardProps
{
    imageUrl: string;
}

export class MovieCard extends React.Component<IMovieCardProps, {}>
{
    constructor(props: IMovieCardProps)
    {
        super(props);
    }

    render()
    {
        return (
            <Container>
                <Image alt='' src={this.props.imageUrl}/>
            </Container>
        )
    }
}