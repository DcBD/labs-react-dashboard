import { SelectAllRounded } from '@material-ui/icons';
import { IDropDownMenuItemObject } from 'components/common/menu/components/DropdownMenuItems';
import { Icon } from 'components/common/misc';
import React, { FC } from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

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
        <div className="dropdown_menu--header" onClick={onClick} >
            <selected.Icon /> <selected.Text /> <Icon IconComponent={isOpen ? ExpandLessIcon : ExpandMoreIcon} />
        </div>
    )
}


export default DropdownMenuHeader;