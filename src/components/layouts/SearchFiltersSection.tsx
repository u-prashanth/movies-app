import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    width: 100%;
`

export const SearchFiltersSection: React.FunctionComponent = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}