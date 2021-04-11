import { Box, TextField } from '@material-ui/core';
import { DropdownMenu, DropdownMenuContent, DropdownMenuSection, MenuHeader, MenuItems } from 'components/common/menu';
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

                <DropdownMenuContent visible={dropdownOpen}>

                    <DropdownMenuSection>

                        <Box p={1}>
                            <TextField variant="outlined" size="small" fullWidth placeholder="Filter..." />
                        </Box>

                        <MenuItems
                            isOpen
                            onChange={(value) => { handleChange(value) }}
                            items={NavigationItems.platform}
                            title="Platform"
                        />

                        <MenuItems
                            isOpen
                            onChange={(value) => { handleChange(value) }}
                            items={NavigationItems.workspaces}
                            title="Workspaces"
                        />

                    </DropdownMenuSection>

                    <DropdownMenuSection>
                        <MenuItems
                            isOpen
                            onChange={(value) => { handleChange(value) }}
                            items={NavigationItems.account}
                            title="Account"
                        />
                    </DropdownMenuSection>

                </DropdownMenuContent>
            </DropdownMenu>
        </div>)
}


export default NavigationMenu;