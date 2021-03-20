import React, { FC } from 'react';
import '../dropDownMenu.scss';

interface IDropdownMenuProps {
    children?: React.ReactNode,
    wrapperRef?: React.RefObject<HTMLDivElement>
    onChange?: () => void

}

const DropdownMenu: FC<IDropdownMenuProps> = ({
    children,
    wrapperRef,
    onChange
}: IDropdownMenuProps) => {



    return (
        <div className="dropdown-menu" ref={wrapperRef}>
            {
                children
            }

        </div>
    )
}

export default DropdownMenu