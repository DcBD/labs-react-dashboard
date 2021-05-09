import { Box, TextField } from '@material-ui/core';
import { DropdownMenu, DropdownMenuContent, DropdownMenuSection, MenuHeader, MenuItems } from 'components/common/menu';
import { IDropDownMenuItemObject } from 'components/common/menu/components/DropdownMenuItems';
import { Icon } from 'components/common/misc';
import { getItem, INavigationItem } from 'components/common/navigation';
import { FC, useState } from 'react'
import useDropdown from 'react-dropdown-hook';
import styled from 'styled-components';

const Container = styled.div``;


const filterItems: IDropDownMenuItemObject[] = [
    {
        Icon: () => <Icon icon="follow" />,
        Text: () => "Followed",
        value: "followed"
    }
];

const ListMenu: FC = () => {

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    const [value, setValue] = useState("followed")
    const handleChange = (value: string): void => {
        setValue(value);

        toggleDropdown();
    }

    return (
        <Container>
            <DropdownMenu wrapperRef={wrapperRef}>
                <MenuHeader onClick={toggleDropdown} selected={filterItems[0] as IDropDownMenuItemObject} isOpen={dropdownOpen} />

                <DropdownMenuContent visible={dropdownOpen}>

                    <DropdownMenuSection>

                        <Box p={1}>
                            <TextField variant="outlined" size="small" fullWidth placeholder="Filter..." onChange={(e) => null} />
                        </Box>

                        <MenuItems
                            isOpen
                            onChange={(value) => { handleChange(value) }}
                            items={filterItems}
                            title="Workspaces"
                        />

                    </DropdownMenuSection>


                </DropdownMenuContent>
            </DropdownMenu>
        </Container>
    )
}


export default ListMenu