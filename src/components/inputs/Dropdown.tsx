import React, { FunctionComponent } from 'react'
import Styled from 'styled-components'

const Wrapper = Styled.select`
    width: auto;
    height: 32px;

    padding: 0px 8px;
    
    border-radius: 4px;
    border: none !important;
    background-color: #555;

    font-size: 12px;
    font-weight: 600;
    color: #888;

    &:focus
    {
        outline: none;
    }
`

const Option = Styled.option`
    width: 100%;
    height: 42px !important;

    padding: 10px;
    font-size: 14px;
    color: #aaa;
`

interface IDropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement>
{
    value: string;
    options?: string[],
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export class Dropdown extends React.Component<IDropdownProps, {}>
{
    constructor(props: IDropdownProps)
    {
        super(props);
    }

    render()
    {
        return (
            <Wrapper 
                {...this.props}
                onChange={e => this.props.onChange(e)}
            >
                <Option key={this.props.placeholder || ""} value="" disabled selected hidden>{this.props.placeholder || 'Select'}</Option>
                {
                    this.props.options!.map(option => <Option key={option} value={option}>{option}</Option>)
                }
            </Wrapper>
        )
    }
}