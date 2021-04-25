import { FC } from "react"
import styled from "styled-components";


const Container = styled.div`
    flex: 1;
`;

const Spacer: FC = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Spacer;