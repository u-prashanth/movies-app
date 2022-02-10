import React from 'react';
import Styled from 'styled-components';

import { GetServerSidePropsContext } from 'next';
import { NextRouter, withRouter } from 'next/router';

import { IMovie, IMovieData } from '../interface';
import { MovieBackdrop, Page } from '../components';
import { GetMovieDetailsService } from '../services';


const Container = Styled.div`
    width: 100%:
    height: 100%;

    background-color: #212121;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const MovieDetailsSection = Styled.div`
    max-width: 1200px;
    width: 100%;
    height: 100%;

    margin: 0px auto;
    margin-top: -120px;
    padding: 30px;

    background-color: #1e1e1e;
    border-radius: 8px;

    position: relative;
    z-index: 10;
`

const Title = Styled.p`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;

    @media only screen and (max-width: 800px)
    {
        font-size: 14px;
    }
`
const Overview = Styled.p`
    color: #e1e1e1;
    font-size: .8rem;
    font-weight: 400;
    line-height: 30px;
    margin-top: 16px;

    @media only screen and (max-width: 800px)
    {
        margin-top: 8px;
        font-size: 12px;
        line-height: 18px;
    }
`

const VideoWrapper = Styled.div`
    width: 100%;
    height: 60%;
    margin: 24px 0px;

    @media only screen and (max-width: 1000px)
    {
        height: 40%;
    }
`

interface IMovieProps
{
    movieDetails: IMovie;
}

const Movie: React.FunctionComponent<IMovieProps> = (props) => {
    return (
        <Page title={`Netflix | ${props.movieDetails.title}` || ''}>
            <Container>
                <MovieBackdrop backdropURL={props.movieDetails.backdrop_path!}/>

                <MovieDetailsSection>
                    <Title>{props.movieDetails.title!}</Title>
                    <Overview>{props.movieDetails.overview!}</Overview>

                    <VideoWrapper>
                        <div className='embed-container'>
                            <iframe src='https://www.youtube.com/embed/ZYzbalQ6Lg8' frameBorder='0' allowFullScreen></iframe>
                        </div>
                    </VideoWrapper>
                </MovieDetailsSection>
            </Container>
        </Page>
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    return {
        props: {
            movieDetails: JSON.parse(JSON.stringify((await GetMovieDetailsService(ctx.query.id! as string)).data))
        }
    }
}

export default Movie;