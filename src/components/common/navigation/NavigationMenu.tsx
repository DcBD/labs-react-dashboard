import { DropdownMenu, MenuHeader, MenuItems } from 'components/common/menu';
import NavigationItems, { getItem, INavigationItem } from 'components/common/navigation/NavigationMenuItems';
import { FC, useState } from 'react';
import useDropdown from 'react-dropdown-hook';



interface INavigationMenu {
    selected?: string
}

const NavigationMenu: FC<INavigationMenu> = ({
    selected = 'home'
}: INavigationMenu) => {

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const [value, setValue] = useState(selected)

    const handleChange = (value: string): void => {
        setValue(value);

        toggleDropdown();
    }

    return (
        <div>
            <DropdownMenu wrapperRef={wrapperRef}>
                <MenuHeader onClick={toggleDropdown} selected={getItem(value) as INavigationItem} isOpen={dropdownOpen} />


                <MenuItems isOpen={dropdownOpen} onChange={(value) => { handleChange(value) }} items={NavigationItems.platform} />

            </DropdownMenu>
        </div>)
}


export default NavigationMenu;