import { Box, Typography } from '@material-ui/core';
import { MenuItem } from 'components/common/menu';
import React, { FC } from 'react'
import styled from 'styled-components';
import { Spacing } from 'styledHelpers/Spacing';


export interface IDropDownMenuItemObject {
    Icon: any,
    Text: any,
    value: string
}

export interface IDropdownMenuItemsProps {

    isOpen?: boolean
    items?: Array<IDropDownMenuItemObject>
    onChange: (value: string) => void,
    title?: string
}


const ItemIcon = styled.div`
    margin-right: ${Spacing[4]}rem;
`;



const DropdownMenuItems: FC<IDropdownMenuItemsProps> = ({
    isOpen = false,
    items,
    onChange,
    title


}: IDropdownMenuItemsProps) => {



    return isOpen ? (
        <div>
            <Box paddingLeft={1} textAlign="left">
                <Typography className="bold" variant="caption" color="textSecondary" align="left">{title}</Typography>
            </Box>
            <>
                {items?.map((item, i) => <MenuItem key={i} onClick={() => onChange(item.value)}>
                    <ItemIcon><item.Icon /></ItemIcon>
                    <div><item.Text /></div>
                </MenuItem>)}
            </>
        </div>
    ) : null
}


export default DropdownMenuItems;