
import { FC } from 'react'
import styled from 'styled-components';
import { Colors } from 'styledHelpers/Colors';
import { FontWeight } from "shared/Types";

interface Props {
    fontWeight?: FontWeight,
    margin?: string
    marginTop?: string
    marginBottom?: string
    marginRight?: string
    marginLeft?: string
}




export const Text = styled.span<Props>`
    ${({ color }) => color && `color: ${color};`}
    ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}

    /* Margin */
    ${({ margin }) => margin && `margin: ${margin};`}
    ${({ marginTop }) => marginTop && `margin: ${marginTop};`}
    ${({ marginBottom }) => marginBottom && `margin: ${marginBottom};`}
    ${({ marginRight }) => marginRight && `margin: ${marginRight};`}
    ${({ marginLeft }) => marginLeft && `margin: ${marginLeft};`}

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


