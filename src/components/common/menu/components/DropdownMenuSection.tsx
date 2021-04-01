import { Box } from "@material-ui/core";
import React, { FC } from "react";



interface IDropdownMenuSectionProps {
    children: React.ReactElement | Array<React.ReactElement>
}


const DropdownMenuSection: FC<IDropdownMenuSectionProps> = ({
    children
}: IDropdownMenuSectionProps) => {

    return (
        <Box>
            {children}
        </Box>
    )

}


export default DropdownMenuSection;