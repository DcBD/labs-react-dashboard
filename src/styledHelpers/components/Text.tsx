
import { FC } from 'react'
import styled from 'styled-components';
import { Colors } from 'styledHelpers/Colors';
import { FontWeight, Size } from "shared/Types";

interface Props {
    fontWeight?: FontWeight,
    margin?: string
    marginTop?: string
    marginBottom?: string
    marginRight?: string
    marginLeft?: string
    fontSize?: Size
}




export const Text = styled.span<Props>`
    ${({ color }) => color && `color: ${color};`}
    ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
    ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
    
    /* Margin */
    ${({ margin }) => margin && `margin: ${margin};`}
    ${({ marginTop }) => marginTop && `margin-top: ${marginTop};`}
    ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
    ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`}
    ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft};`}

`;


export const TextPrimary: FC<Props> = ({ children, ...props }) => {
    return (
        <Text color={Colors.blueText} {...props}>
            {children}
        </Text>
    )
}

export const TextSecondary: FC<Props> = ({ children, ...props }) => {
    return (
        <Text color={Colors.grayText} {...props}>
            {children}
        </Text>
    )
}

export const TextPrimaryDark: FC<Props> = ({ children, ...props }) => {
    return (
        <Text color={Colors.darkBlueText} {...props}>
            {children}
        </Text>
    )
}




