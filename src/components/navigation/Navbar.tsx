import React from 'react';
import Styled from 'styled-components';

const NavbarWrapper = Styled.nav`
    width: 100%;
    height: 60px;

    position: fixed;
    top: 0;
    z-index: 1000;

    background-color: #fcfcfc;
    border-bottom: 1px solid #dbdbdb;
`

const NavbarContainer = Styled.div`
    max-width: 1024px;
    width: 100%;
    height: inherit;

    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NavLeft = Styled.div`

`

const NavRight = Styled.div`

`

export const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarContainer>
                <NavLeft>
                    <p style={{ fontSize: 20, fontWeight: 900 }}>INCREDIBLE MOVIES</p>
                </NavLeft>

                <NavRight>

                </NavRight>
            </NavbarContainer>
        </NavbarWrapper>
    )
}