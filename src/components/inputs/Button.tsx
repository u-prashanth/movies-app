import React from 'react';
import Styled from 'styled-components';

const ButtonWrapper = Styled.button<{ buttonStyle?: ButtonStyle }>`
    color: ${props => props.buttonStyle === 'primary' ? '#000' : '#fff'};
    background-color: ${props => props.buttonStyle === 'primary' ? '#fff' : '#6d6d6eb3'};
    border-radius: 4px;
    border: none;

    height: 44px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 17px;
    font-weight: 600;
    white-space: pre;

    padding: 0px 24px;
    padding-right: 30px;

    &:hover
    {
        filter: brightness(0.8);
    }
`

type ButtonStyle = "primary" | "secondary";

interface IButtonProps
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
            <ButtonWrapper buttonStyle={buttonStyle || 'primary'}>
                {children}
            </ButtonWrapper>
        )
    }
}