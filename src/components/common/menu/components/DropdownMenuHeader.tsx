import { IDropDownMenuItemObject } from 'components/common/menu/components/DropdownMenuItems';
import { Icon } from 'components/common/misc';
import React, { FC } from 'react'
import styled from 'styled-components';
import { borderBottom, borderTransparentBottom } from 'styledHelpers/components/Borders';
import { Spacing } from 'styledHelpers/Spacing';



const Container = styled.div<{ isOpen: boolean }>`

    ${(props) => props.isOpen ? borderBottom() : borderTransparentBottom()}

    padding: ${Spacing[2]}rem;

    display: flex;
    justify-content:space-between;

    pointer-events: all;
    cursor: pointer;
`;

const IconContainer = styled.div`
    margin-right: ${Spacing[1]};
`;

interface IDropdownMenuHeaderProps {
    selected: IDropDownMenuItemObject
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
    isOpen: boolean
}

const DropdownMenuHeader: FC<IDropdownMenuHeaderProps> = ({
    selected,
    onClick,
    isOpen
}: IDropdownMenuHeaderProps) => {



    return (
        <Container onClick={onClick} isOpen={isOpen}>
            <IconContainer><selected.Icon /></IconContainer> <selected.Text /> <Icon icon="arrow-down" />
        </Container>
    )
}


export default DropdownMenuHeader;