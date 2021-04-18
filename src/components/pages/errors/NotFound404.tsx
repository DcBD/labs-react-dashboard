import Page from "components/layout/Page";
import { FC } from "react";
import styled from "styled-components";


const Container = styled(Page)`

`;

const NotFound404: FC = () => {
    return (
        <Container>
            404 Not found.
        </Container>
    )
}

export default NotFound404;