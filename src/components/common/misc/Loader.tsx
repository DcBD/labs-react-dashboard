import { CircularProgress } from "@material-ui/core"
import { FC } from "react"
import styled from "styled-components"
import { Colors } from "styledHelpers/Colors";


const Container = styled.div``

const Progress = styled(CircularProgress)`
    color: ${Colors.blueText}
`;

const Loader: FC = () => {

    return (
        <Container>
            <Progress />
        </Container>
    )

}

export default Loader