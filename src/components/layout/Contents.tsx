import { FC } from "react";
import styled from "styled-components";
import { Spacing } from "styledHelpers/Spacing";


const Container = styled.div`
    position:relative;
    display: flex;
    padding: ${Spacing[4]}rem;
`;


const Contents: FC = ({ children }) => {

    return (
        <Container>
            {children}
        </Container>
    )
}


export default Contents;