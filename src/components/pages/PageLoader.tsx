import Loader from "components/common/misc/Loader";
import { FC } from "react";
import styled from "styled-components";


const Container = styled.div`
    display:flex;
    height: 100vh;
    width: 100vw;
    align-items: center;
    align-content: center;
    justify-content: center;
    overflow: hidden;
`;

const PageLoader: FC = () => {
    return (
        <Container>
            <Loader />
        </Container>
    )
}


export default PageLoader;