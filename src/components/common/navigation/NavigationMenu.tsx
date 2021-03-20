import { DropdownMenu, MenuHeader, MenuItems } from 'components/common/menu';
import NavigationItems from 'components/common/navigation/NavigationMenuItems';
import { FC, useState } from 'react';
import useDropdown from 'react-dropdown-hook';



interface INavigationMenu {
    selected?: string
}

const NavigationMenu: FC<INavigationMenu> = ({
    selected
}: INavigationMenu) => {

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const [value, setValue] = useState(selected)

    return (
        <div>
            <DropdownMenu wrapperRef={wrapperRef}>
                <MenuHeader onClick={toggleDropdown}>
                    TESTTTTTTTTTTT
                </MenuHeader>

                <MenuItems isOpen={dropdownOpen} onChange={(value) => setValue(value)} items={NavigationItems.platform} />

            </DropdownMenu>
        </div>)
}


export default NavigationMenu;