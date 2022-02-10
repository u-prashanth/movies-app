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

const MovieTitle = Styled.p`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
`

const OverviewText = Styled(MovieTitle)`
    font-size: 14px;
`

const VideoWrapper = Styled.div`
    width: 100%;
    height: 60%;

    @media only screen and (max-width: 1000px)
    {
        height: 40%;
    }

    margin-bottom: 12px;
`

// interface IMovieProps extends GetServerSidePropsContext
// {
//     router: NextRouter
//     data: string;
// }

// interface IState
// {
//     movieData?: IMovieData;
// }

// class Movie extends React.Component<IMovieProps, IState>
// {
//     constructor(props: IMovieProps)
//     {
//         super(props);

//         this.state = {
//             movieData: {}
//         }
//     }

//     componentDidMount()
//     {
//         this.setMovieData(this.props.data);
//     }

//     componentDidUpdate(prevProps: Readonly<IMovieProps> & Readonly<{ children?: React.ReactNode; }>)
//     {
//         if(this.props.router.isReady !== prevProps.router.isReady || this.props !== prevProps)
//             this.setMovieData(this.props.data);
//     }

//     setMovieData = (value: string) => {
//         this.setState({ movieData: JSON.parse(value) as IMovieData });
//     }

//     shouldComponentUpdate(prevProps: Readonly<IMovieProps> & Readonly<{ children?: React.ReactNode; }>)
//     {
//         return !(this.props !== prevProps);
//     }

//     render()
//     {
//         return (
//             <Page title={this.state.movieData?.title || ''}>
//                 <Container>
//                     <VideoWrapper>
//                         <div className='embed-container'>
//                             <iframe src='https://www.youtube.com/embed/ZYzbalQ6Lg8' frameBorder='0' allowFullScreen></iframe>
//                         </div>
//                     </VideoWrapper>

//                     <MovieTitle>{this.state.movieData?.title || ''}</MovieTitle>
//                     <MovieTitle>{this.state.movieData?.overview || ''}</MovieTitle>


//                 </Container>
//             </Page>
//         )    
//     }
// }

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
//     return {
//         props: {
//             data: JSON.stringify((await GetMovieDetailsService(ctx.query.id! as string)).data)
//         }
//     }
// }

// export default withRouter(Movie);


interface IMovieProps
{
    movieDetails: IMovie;
}

const Movie: React.FunctionComponent<IMovieProps> = (props) => {
    return (
        <Page title={`Netflix | ${props.movieDetails.title}` || ''}>
            <Container>
                <MovieBackdrop backdropURL={props.movieDetails.backdrop_path!}/>
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