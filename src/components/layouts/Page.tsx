import Head from 'next/head';
import React from 'react';
import Styled from 'styled-components';
import { Navbar } from '..';

const Container = Styled.div`
	width: 100%:
	height: 100%;
`

const Body = Styled.div<{ enableTopPadding?: boolean }>`
    width: 100%;

    padding-top: ${props => props.enableTopPadding ? '70px' : '0px'};

    @media only screen and (max-width: 800px)
    {
        padding-top: ${props => props.enableTopPadding ? '48px' : '0px'};
    }
`

interface IPageProps
{
    title: string;
    enableTopPadding?: boolean;
}

export const Page: React.FunctionComponent<IPageProps> = (props) => {
    return (
        <Container>
            <Head>
                <title>{props.title}</title>
            </Head>

            <Navbar />

            <Body enableTopPadding={props.enableTopPadding}>
                {props.children}
            </Body>
        </Container>
    )
}