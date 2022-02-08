import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { NextRouter, withRouter } from 'next/router';
import React from 'react';
import Styled from 'styled-components';
import { Page } from '../components';
import { IMovieData } from '../interface';


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
                    <MovieTitle>{this.state.movieData?.title || ''}</MovieTitle>
                    <VideoWrapper>
                        <div className='embed-container'>
                            <iframe src='https://www.youtube.com/embed/ZYzbalQ6Lg8' frameBorder='0' allowFullScreen></iframe>
                        </div>
                    </VideoWrapper>
                </Container>
            </Page>
        )    
    }
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {

    let result = await axios.get(`https://api.themoviedb.org/3/movie/${ctx.query.id}?api_key=8dc5ab4cbeee685d76ab97a9f22bf7ea&language=en-US`);

    return {
        props: {
            data: JSON.stringify(result.data)
        }
    }
}

export default withRouter(Movie);