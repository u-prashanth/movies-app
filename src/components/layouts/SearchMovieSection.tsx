import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    max-width: 1024px;
    width: 100%;
`

export const SearchMovieSection: React.FunctionComponent = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}