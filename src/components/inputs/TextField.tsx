import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    width: 100%;
    height: 42px;

    border: 1px solid #dbdbdb;
    border-raduis: 3px;
`

const Input = Styled.input`
    width: 100%;
    height: 40px;

    padding: 0px 8px;

    border: none;
    &:focus
    {
        outline: none;
    }

    &:placeholder
    {
        font-size: 12px;
    }
`

interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const TextField: React.FunctionComponent<ITextFieldProps> = (props) => {
    return (
        <Container>
            <Input {...props}/>
        </Container>
    )
}