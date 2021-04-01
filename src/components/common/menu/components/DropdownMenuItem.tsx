
import React, { FC } from 'react';
import styled from 'styled-components';
import { grayBackgroundHover } from 'styledHelpers/components/Effects';
import { FontSizes } from 'styledHelpers/Sizes';
import { Spacing } from 'styledHelpers/Spacing';


export interface IDropdownMenuItemProps {
    children?: React.ReactNode
    onClick?: () => void
}


const Container = styled.div`
    padding: ${Spacing[1]}em ${Spacing[2]}em;
    font-size: ${FontSizes[18]};
    display: flex;
    cursor: pointer;
    text-align:left;
    ${grayBackgroundHover()}
`;

const DropDownMenuItem: FC<IDropdownMenuItemProps> = ({
    children,
    onClick
}: IDropdownMenuItemProps) => {


    return (
        <Container onClick={onClick}>
            {children}
        </Container>
    )
}

export default DropDownMenuItem;