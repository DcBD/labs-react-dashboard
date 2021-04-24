import { FC } from "react";
import styled from "styled-components";
import { Spacing } from "styledHelpers/Spacing";


const Container = styled.div`

    position:relative;
    overflow:hidden;
    flex: 1;
    box-sizing:border-box;
    margin-right:${Spacing[4]}rem;

`;


const Page: FC = ({ children }) => {

    return (
        <Container>
            {children}
        </Container>
    )
}

export default Page;