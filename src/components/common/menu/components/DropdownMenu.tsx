import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from 'styledHelpers/Colors';




interface IDropdownMenuProps {
    children?: React.ReactNode,
    wrapperRef?: React.RefObject<HTMLDivElement>
    onChange?: () => void
}


const Container = styled.div`
    position: relative;

    min-width: 250px;
    z-index:2;
`;

const DropdownMenu: FC<IDropdownMenuProps> = ({
    children,
    wrapperRef,
    onChange
}: IDropdownMenuProps) => {

    return (
        <Container ref={wrapperRef}>
            {
                children
            }
        </Container>
    )
}

export default DropdownMenu