import React from 'react';
import Styled from 'styled-components';
import { NextRouter, withRouter } from 'next/router';
import { Page } from '../components';
import axios from 'axios';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

interface IWithRouterProps extends GetServerSidePropsContext
{
    router: NextRouter
    result: {}
}

class Search extends React.Component<IWithRouterProps,{}>
{
    constructor(props: IWithRouterProps)
    {
        super(props)
    }

    componentDidMount()
    {
        console.log('Query: ', this.props);
    }

    componentDidUpdate(prevProps: Readonly<IWithRouterProps> & Readonly<{ children?: React.ReactNode; }>)
    {
        if(this.props.router.isReady !== prevProps.router.isReady)
            console.log('Query: ', this.props.router.query);
    }

    shouldComponentUpdate(prevProps: Readonly<IWithRouterProps> & Readonly<{ children?: React.ReactNode; }>)
    {
        return this.props.router.isReady !== prevProps.router.isReady;
    }

    render()
    {
        return (
            <Page title="Search Results">

            </Page>
        )
    }
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {

    let result = await axios.get('https://api.themoviedb.org/3/search/keyword?api_key=8dc5ab4cbeee685d76ab97a9f22bf7ea&query=spider&page=1');

    return {
        props: {
            result: JSON.stringify(result.data.results)
        }
    }
}

export default withRouter(Search);