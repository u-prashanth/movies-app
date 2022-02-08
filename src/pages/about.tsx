import React from 'react';
import Styled from 'styled-components';
import { Page } from '../components';

const Container = Styled.div`
    max-width: 1024px;
    width: 100%;
    height: 100%;

    margin: auto;

    padding: 16px;
    padding-top: 100px;
`

const Title = Styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    white-space: normal;

    margin-bottom: 16px;
`

const CompoanyInfo = Styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    white-space: pre-wrap;
    line-height: 24px;
`

class About extends React.Component<{}, {}>
{
    constructor(props: {})
    {
        super(props);
    }

    render()
    {
        return (
            <Page title="About">
                <Container>
                    <Title>About Us</Title>
                    <CompoanyInfo>
                        Incredible Web Ltd  (C52279) is a web development and web design company founded in Malta in 2011 and an early adopter of cutting-edge technologies, including progressive web apps, mobile application development, artificial intelligence and distributed ledger technologies or blockchain.

                        At Incredible Web we take a proactive approach towards adopting and learning the latest standards in order to create future-proof designs and have developed applications, in-house tools, websites & other software solutions for clients worldwide, ranging from U.S. Senators to local takeaways and multinational corporations.

                        Incredible Web has featured on international publications, presented its work internationally, was nominated for world renowned awards and has contributed to the open-source community.

                        Incredible Web is included in Apple Developer programme and owns a license allowing it to deploy and publish solutions to the Appstore for iPhone, iPad and Apple Watch.

                        Incredible Web is a Google Play publisher allowing development of priced apps, in-­app purchases and/or subscriptions. 
                    </CompoanyInfo>
                </Container>
            </Page>
        )
    }
}

export default About;