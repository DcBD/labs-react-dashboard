import { FC } from "react";
import styled from "styled-components";


const Container = styled.div`
    flex:1;
    background-color:red;
`;


const Page: FC = ({ children }) => {

    return (
        <Container>
            {children}
        </Container>
    )
}

export default Page;