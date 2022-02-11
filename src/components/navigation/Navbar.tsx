import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Styled from 'styled-components';

import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

import { TextField } from '..';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHook';
import { setSearchTerm as reduxSetSearchTerm } from '../../redux/reducer/moviesReducer';

const NavbarWrapper = Styled.nav<{ fadeToBlack: boolean }>`
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

    ${
        props => props.fadeToBlack ?

        `
            background: #000;
        `

        :

        `
            background: rgba(33,33,33,0.51);
            background: -moz-linear-gradient(top, rgba(33,33,33,0.51) 0%, rgba(33,33,33,0) 100%);
            background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(33,33,33,0.51)), color-stop(100%, rgba(33,33,33,0)));
            background: -webkit-linear-gradient(top, rgba(33,33,33,0.51) 0%, rgba(33,33,33,0) 100%);
            background: -o-linear-gradient(top, rgba(33,33,33,0.51) 0%, rgba(33,33,33,0) 100%);
            background: -ms-linear-gradient(top, rgba(33,33,33,0.51) 0%, rgba(33,33,33,0) 100%);
            background: linear-gradient(to bottom, rgba(33,33,33,0.51) 0%, rgba(33,33,33,0) 100%);
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#212121', endColorstr='#212121', GradientType=0 );
        `

    }

    transition: all .5s linear;

    @media only screen and (max-width: 800px)
	{
		height: 48px;
	}
`

const NavbarContainer = Styled.div`
    width: 100%;
    height: inherit;

    padding: 0px 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 800px)
	{
		padding: 0px 40px;
	}

    @media only screen and (max-width: 576px)
	{
		padding: 0px 12px;
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
    width: 92.5px;
    object-fit: contain;

    cursor: pointer;

    @media only screen and (max-width: 800px)
	{
		width: 82.5px;
	}
`

const LinksWrapper = Styled.ul`
    list-style: none;

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

const LinkText = Styled.li`
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    cursor: pointer;

    @media only screen and (max-width: 800px)
	{
		font-size: 12px;
	}
`

export const Navbar = () => {

    const router = useRouter();

    // Component State
    const [ searchTerm, setSearchTerm ] = React.useState('');
    const [ fadeToBlack, setFadeToBlack ] = React.useState(false);

    // Redux State
    const movies = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        setSearchTerm(movies.searchTerm);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const handleScroll = (e: Event) => {
        const window = e.currentTarget as Window;
        
        if(window.scrollY > 2)
        {
            setFadeToBlack(true);
        }
        else
        {
            setFadeToBlack(false);
        }
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/search?q=${searchTerm}`)
    }

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        dispatch(reduxSetSearchTerm(event.target.value));
    }

    return (
        <NavbarWrapper fadeToBlack={fadeToBlack}>
            <NavbarContainer>
                <NavLeft>
                    <Link href='/' passHref>
                        <Logo src='../../netflix-logo.svg' onClick={e => dispatch(reduxSetSearchTerm(''))}/>
                    </Link>

                    <LinksWrapper>
                        <Link href='/' passHref>
                            <LinkText onClick={e => dispatch(reduxSetSearchTerm(''))}>Movies</LinkText>
                        </Link>

                        <Link href='/about' passHref>
                            <LinkText>About</LinkText>
                        </Link>
                    </LinksWrapper>
                </NavLeft>

                <NavRight>
                    <form style={{ width: 300 }} onSubmit={handleFormSubmit}>
                        <TextField 
                            placeholder='Search Movies' 
                            withIcon={<Icon path={mdiMagnify} size={0.6} color="#888"/>}
                            value={searchTerm}
                            onChange={handleSearchInput}
                        />
                    </form>
                </NavRight>
            </NavbarContainer>
        </NavbarWrapper>
    )
}