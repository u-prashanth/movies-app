import React from 'react';
import Link from 'next/link';
import Styled from 'styled-components';

const NavbarWrapper = Styled.nav`
    width: 100%;
    height: 70px;

    position: fixed;
    top: 0;
    z-index: 1000;

    background: rgba(33,33,33,0.51);
    background: -moz-linear-gradient(top, rgba(33,33,33,0.51) 0%, rgba(33,33,33,0) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(33,33,33,0.51)), color-stop(100%, rgba(33,33,33,0)));
    background: -webkit-linear-gradient(top, rgba(33,33,33,0.51) 0%, rgba(33,33,33,0) 100%);
    background: -o-linear-gradient(top, rgba(33,33,33,0.51) 0%, rgba(33,33,33,0) 100%);
    background: -ms-linear-gradient(top, rgba(33,33,33,0.51) 0%, rgba(33,33,33,0) 100%);
    background: linear-gradient(to bottom, rgba(33,33,33,0.51) 0%, rgba(33,33,33,0) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#212121', endColorstr='#212121', GradientType=0 );
`

const NavbarContainer = Styled.div`
    width: 100%;
    height: inherit;

    padding: 0px 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 576px)
	{
		padding: 0px 16px;
	}
`

const NavLeft = Styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const NavRight = Styled.div`

`

const Logo = Styled.img`
    width: 100px;
    object-fit: contain;
`

const LinksWrapper = Styled.div`
    display: flex;
    align-items: center;

    padding-left: 60px;

    @media only screen and (max-width: 576px)
	{
		padding-left: 32px;
	}

    & > *
    {
        margin-right: 18px;
    }
`

const LinkText = Styled.a`
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
`

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarContainer>
                <NavLeft>
                    <Logo src='../../netflix-logo.svg'/>

                    <LinksWrapper>
                        <Link href='/'>
                            <LinkText>Movies</LinkText>
                        </Link>

                        <Link href='/about'>
                            <LinkText>About</LinkText>
                        </Link>
                    </LinksWrapper>
                </NavLeft>

                <NavRight>

                </NavRight>
            </NavbarContainer>
        </NavbarWrapper>
    )
}