import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.button<{ buttonStyle?: ButtonStyle, spanWidth?: boolean }>`
    color: ${props => props.buttonStyle === 'primary' ? '#000' : '#fff'};
    background-color: ${props => props.buttonStyle === 'primary' ? '#fff' : '#6d6d6eb3'};
    border-radius: 4px;
    border: none;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0px 24px;

    &:hover
    {
        filter: brightness(0.8);
    }

    &:active
    {
        filter: brightness(0.9);
    }

    cursor: pointer;

    & > *:nth-child(2)
    {
        padding-left: 8px;
        margin-right: 8px;
    }

    @media only screen and (max-width: 800px)
    {
        height: 30px;
        padding: 0px 16px;

        & > p
        {
            font-size: 11px;
        }

        & > *:first-child
        {
            transform: scale(0.8);
        }
    }
`

const ButtonText = Styled.p`
    font-size: 14px;
    font-weight: 600;
    white-space: pre;
`

type ButtonStyle = "primary" | "secondary";

interface IButtonProps extends React.HTMLAttributes<HTMLDivElement>
{
    buttonStyle?: ButtonStyle;
    icon?: React.ReactNode | JSX.Element;
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
    return (
        <Wrapper buttonStyle={props.buttonStyle || 'primary'}>
            {props.icon}
            <ButtonText>{props.children}</ButtonText>
        </Wrapper>
    )
}