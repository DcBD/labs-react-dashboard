import { MenuItem } from 'components/common/menu';
import React, { FC } from 'react'


interface IDropDownMenuItemObject {
    Icon: any,
    Text: any,
    value: string
}

export interface IDropdownMenuItemsProps {

    isOpen?: boolean
    items?: Array<IDropDownMenuItemObject>
    onChange: (value: string) => void
}

const DropdownMenuItems: FC<IDropdownMenuItemsProps> = ({
    isOpen = false,
    items,
    onChange


}: IDropdownMenuItemsProps) => {



    return isOpen ? (
        <div className="dropdown_menu--items">
            {items?.map((item, i) => <MenuItem key={i} onClick={() => onChange(item.value)}>
                <div><item.Icon /></div>
                <div><item.Text /></div>
            </MenuItem>)}
        </div>
    ) : null
}


export default DropdownMenuItems;