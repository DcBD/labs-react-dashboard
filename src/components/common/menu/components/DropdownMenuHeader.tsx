import { IDropDownMenuItemObject } from 'components/common/menu/components/DropdownMenuItems';
import { Icon } from 'components/common/misc';
import React, { FC } from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import styled from 'styled-components';
import { borderBottom } from 'styledHelpers/components/Borders';
import { Spacing } from 'styledHelpers/Spacing';



const Container = styled.div`
    ${borderBottom()};

    padding: ${Spacing[1]};

    display: flex;
    justify-content:space-between;

    pointer-events: all;
    cursor: pointer;
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
        <Container onClick={onClick} >
            <selected.Icon /> <selected.Text /> <Icon icon="arrow-down" />
        </Container>
    )
}


export default DropdownMenuHeader;