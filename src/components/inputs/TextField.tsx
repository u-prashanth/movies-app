import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    width: 100%;
    height: 42px;
    
    border-radius: 4px;
    background-color: #212121;

    display: flex;
    align-items: center;

    overflow: clip;
`

const Input = Styled.input<{ withIcon?: boolean }>`
    width: 100%;
    height: inherit;

    padding: 0px 16px;
    padding-left: ${props => props.withIcon ? '0px' : '16px'};
    
    background-color: #212121;

    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #eaeaeb;

    border: none;
    &:focus
    {
        outline: none;
    }

    &::placeholder
    {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        font-weight: 600;
        color: #888;
    }
`

const IconWrapper = Styled.div`
    width:62px;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;
`

interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> 
{
    withIcon?: React.ReactNode | JSX.Element;
}

export const TextField: React.FunctionComponent<ITextFieldProps> = (props) => {
    return (
        <Container>
            {
                props.withIcon &&
                <IconWrapper>
                    {props.withIcon}
                </IconWrapper>
            }
            <Input {...props} withIcon={props.withIcon !== undefined}/>
        </Container>
    )
}