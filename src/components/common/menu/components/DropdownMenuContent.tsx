import React from "react";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";
import { borderRoundedWithoutTop } from "styledHelpers/components/Borders";


interface IDropdownMenuContentProps {
    children: Array<React.ReactElement> | React.ReactElement
    visible?: boolean
}


const Container = styled.div`
        position: absolute;
        box-sizing: border-box;
        background-color: ${Colors.white};
        width: 100%;
        ${borderRoundedWithoutTop()};
`;


const DropdownMenuContent = ({
    children,
    visible = false,

}: IDropdownMenuContentProps) => {
    return visible ? (<Container>
        {children}
    </Container>) : null
}



export default DropdownMenuContent;