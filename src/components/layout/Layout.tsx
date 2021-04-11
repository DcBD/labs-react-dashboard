import { FC } from "react";
import styled from "styled-components";


const Container = styled.div``;


const Layout: FC = ({ children }) => {

    return (
        <Container>
            {children}
        </Container>
    )

}



export default Layout
