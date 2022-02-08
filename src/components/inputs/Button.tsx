import React from 'react';
import Styled from 'styled-components';

const ButtonWrapper = Styled.button<{ buttonStyle?: ButtonStyle, spanWidth?: boolean }>`
    color: ${props => props.buttonStyle === 'primary' ? '#000' : '#fff'};
    background-color: ${props => props.buttonStyle === 'primary' ? '#fff' : '#6d6d6eb3'};
    border-radius: 4px;
    border: none;
    height: 42px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    font-weight: 600;
    white-space: pre;

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

    @media only screen and (max-width: 576px)
    {
        font-size: 12px;
        height: 40px;
        padding: 0px 22px;

        & > *:first-child
        {
            transform: scale(0.5);
        }
    }
`

type ButtonStyle = "primary" | "secondary";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>
{
    buttonStyle?: ButtonStyle;
}

export class Button extends React.Component<IButtonProps, {}>
{
    constructor(props: IButtonProps)
    {
        super(props);
    }

    render(): React.ReactNode 
    {
        const { children, buttonStyle } = this.props;

        return (
            <ButtonWrapper buttonStyle={buttonStyle || 'primary'} {...this.props}>
                {children}
            </ButtonWrapper>
        )
    }
}