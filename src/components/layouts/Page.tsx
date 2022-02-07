import Head from 'next/head';
import React from 'react';
import Styled from 'styled-components';
import { Navbar } from '..';

const Container = Styled.div`
	width: 100%:
	height: 100%;

	// overflow: hidden;
	// overflow-y: auto;
`

const Body = Styled.div`
	padding: 16px;
	padding-top: 76px;
`

interface IPageProps
{
    title: string;
}

export class Page extends React.Component<IPageProps, {}>
{
    constructor(props: IPageProps)
    {
        super(props);
    }

    render(): React.ReactNode {
        const { title, children } = this.props;

        return (
            <Container>
                <Head>
                    <title>{title}</title>
                </Head>

                <Navbar />
    
                <Body>
                    {children}
                </Body>
            </Container>
        )
    }
}