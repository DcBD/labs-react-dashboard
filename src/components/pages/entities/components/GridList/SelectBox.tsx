import { Box, TextField } from "@material-ui/core";
import { DropdownMenu, MenuHeader, DropdownMenuContent, DropdownMenuSection, MenuItems } from "components/common/menu";
import { IDropDownMenuItemObject } from "components/common/menu/components/DropdownMenuItems";
import { FC, useState } from "react";
import useDropdown from "react-dropdown-hook";
import styled from "styled-components";


const Container = styled.div`

`;

interface Props {
    onChange?: ((value: string) => void) | undefined,
    initValue: string,
    filterItems: IDropDownMenuItemObject[]
}


const SelectBox: FC<Props> = ({ onChange, initValue, filterItems }) => {

    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
    const [value, setValue] = useState(initValue)



    const handleChange = (value: string): void => {
        setValue(value);

        if (onChange !== undefined) {
            onChange(value)
        }

        toggleDropdown();
    }

    return <Container>
        <DropdownMenu wrapperRef={wrapperRef}>
            <MenuHeader onClick={toggleDropdown} selected={filterItems.filter(item => item.value == value)[0] as IDropDownMenuItemObject} isOpen={dropdownOpen} />

            <DropdownMenuContent visible={dropdownOpen}>

                <DropdownMenuSection>

                    <Box p={1}>
                        <TextField variant="outlined" size="small" fullWidth placeholder="Filter..." onChange={(e) => null} />
                    </Box>

                    <MenuItems
                        isOpen
                        onChange={(value) => { handleChange(value) }}
                        items={filterItems}
                        title=""
                    />

                </DropdownMenuSection>


            </DropdownMenuContent>
        </DropdownMenu>
    </Container>

}


export default SelectBox;