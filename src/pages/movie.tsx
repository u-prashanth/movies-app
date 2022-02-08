import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { NextRouter, withRouter } from 'next/router';
import React from 'react';
import Styled from 'styled-components';
import { Page } from '../components';
import { IMovieData } from '../interface';
import { GetMovieDetailsService } from '../services';


const Container = Styled.div`
    max-width: 1024px;
    width: 100%;
    height: 100%;

    padding: 0px 60px;

    margin: auto;
    padding-top: 100px;

    @media only screen and (max-width: 576px)
    {
        padding: 16px;
        padding-top: 80px;
    }
`

const MovieTitle = Styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #fff;

`

const VideoWrapper = Styled.div`
    width: 100%;
    height: 60vh;

    margin-top: 16px;
`

interface IMovieProps extends GetServerSidePropsContext
{
    router: NextRouter
    data: string;
}

interface IState
{
    movieData?: IMovieData;
}

class Movie extends React.Component<IMovieProps, IState>
{
    constructor(props: IMovieProps)
    {
        super(props);

        this.state = {
            movieData: {}
        }
    }

    componentDidMount()
    {
        this.setMovieData(this.props.data);
    }

    componentDidUpdate(prevProps: Readonly<IMovieProps> & Readonly<{ children?: React.ReactNode; }>)
    {
        if(this.props.router.isReady !== prevProps.router.isReady || this.props !== prevProps)
            this.setMovieData(this.props.data);
    }

    setMovieData = (value: string) => {
        this.setState({ movieData: JSON.parse(value) as IMovieData }, () => {
            console.log(this.state.movieData)
        })
    }

    shouldComponentUpdate(prevProps: Readonly<IMovieProps> & Readonly<{ children?: React.ReactNode; }>)
    {
        return !(this.props !== prevProps);
    }

    render()
    {
        return (
            <Page title="Spiderman">
                <Container>
                    <VideoWrapper>
                        <div className='embed-container'>
                            <iframe src='https://www.youtube.com/embed/ZYzbalQ6Lg8' frameBorder='0' allowFullScreen></iframe>
                        </div>
                    </VideoWrapper>

                    <MovieTitle>{this.state.movieData?.title || ''}</MovieTitle>

                    
                </Container>
            </Page>
        )    
    }
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {

    let result = await GetMovieDetailsService(ctx.query.id! as string);

    return {
        props: {
            data: JSON.stringify(result.data)
        }
    }
}

export default withRouter(Movie);