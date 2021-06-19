import { Box, TextField } from '@material-ui/core';
import { DropdownMenu, DropdownMenuContent, DropdownMenuSection, MenuHeader, MenuItems } from 'components/common/menu';
import { Icon } from 'components/common/misc';
import NavigationItems, { getItem, INavigationItem } from 'components/common/navigation/NavigationMenuItems';
import { FC, useState } from 'react';
import useDropdown from 'react-dropdown-hook';
import useRouting from 'services/hooks/useRouting';
import styled from 'styled-components';
import { grayBackgroundHover } from 'styledHelpers/components/Effects';


const ScrollbarSection = styled.div`
    max-height: 300px;
    overflow-y: scroll;
`;

const LogoutSection = styled.div`

    height:50px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${grayBackgroundHover()}
`;

interface INavigationMenu {
    selected?: string
}

interface IMenuItems {
    platform: Array<INavigationItem>
    workspaces: Array<INavigationItem>
    account: Array<INavigationItem>
}

const NavigationMenu: FC<INavigationMenu> = ({
    selected = 'home'
}: INavigationMenu) => {

    const routing = useRouting();

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const [value, setValue] = useState(selected)

    const [items, setItems] = useState<IMenuItems>({
        account: NavigationItems.account,
        platform: NavigationItems.platform,
        workspaces: NavigationItems.workspaces
    })

    const [selectedItem, setSelectedItem] = useState<INavigationItem>(getItem(value) as INavigationItem);






    const handleChange = (v: string): void => {
        setValue(v);

        const _selectedItem = getItem(v) as INavigationItem
        setSelectedItem(_selectedItem);
        routing.redirect(_selectedItem.action);

        toggleDropdown();
    }


    const handleItemsFilter = (data: string): void => {
        if (data === "") {
            setItems({
                account: NavigationItems.account,
                platform: NavigationItems.platform,
                workspaces: NavigationItems.workspaces
            });
        } else {
            setItems({
                account: NavigationItems.account.filter(filterItem => filterItem.value.toLowerCase().search(data) >= 0),
                platform: NavigationItems.platform.filter(filterItem => filterItem.value.toLowerCase().search(data) >= 0),
                workspaces: NavigationItems.workspaces.filter(filterItem => filterItem.value.toLowerCase().search(data) >= 0),
            });
        }

    }

    return (
        <div>
            <DropdownMenu wrapperRef={wrapperRef}>
                <MenuHeader onClick={toggleDropdown} selected={selectedItem} isOpen={dropdownOpen} />

                <DropdownMenuContent visible={dropdownOpen}>

                    <DropdownMenuSection>

                        <Box p={1}>
                            <TextField variant="outlined" size="small" fullWidth placeholder="Filter..." onChange={(e) => handleItemsFilter(e.target.value.toLowerCase())} />
                        </Box>
                        <ScrollbarSection>
                            <MenuItems
                                isOpen
                                onChange={(value) => { handleChange(value) }}
                                items={items.platform}
                                title="Platform"
                            />

                            <MenuItems
                                isOpen
                                onChange={(value) => { handleChange(value) }}
                                items={items.workspaces}
                                title="Workspaces"
                            />
                        </ScrollbarSection>
                    </DropdownMenuSection>

                    <DropdownMenuSection>
                        <MenuItems
                            isOpen
                            onChange={(value) => { handleChange(value) }}
                            items={items.account}
                            title="Account"
                        />
                    </DropdownMenuSection>
                    <DropdownMenuSection>
                        <LogoutSection onClick={() => alert("Are you sure?")}>
                            <Icon icon="people" /> Logout
                        </LogoutSection>
                    </DropdownMenuSection>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>)
}


export default NavigationMenu;