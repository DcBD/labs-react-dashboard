
import React, { FC } from 'react';


export interface IDropdownMenuItemProps {
    children?: React.ReactNode
    onClick?: () => void
}


const DropDownMenuItem: FC<IDropdownMenuItemProps> = ({
    children,
    onClick
}: IDropdownMenuItemProps) => {


    return (
        <div className="drop_down_menu_items--item" onClick={onClick}>
            {children}
        </div>
    )
}

export default DropDownMenuItem;