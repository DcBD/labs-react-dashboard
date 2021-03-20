import React, { FC } from 'react'


interface IDropdownMenuHeaderProps {
    children?: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const DropdownMenuHeader: FC<IDropdownMenuHeaderProps> = ({
    children,
    onClick
}: IDropdownMenuHeaderProps) => {



    return (
        <div className="dropdown_menu--header" onClick={onClick}>
            {children}
        </div>
    )
}


export default DropdownMenuHeader;