import { FC } from "react-transition-group/node_modules/@types/react";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";
import { Spacing } from "styledHelpers/Spacing";



const Container = styled.div`

    background-color: ${Colors.lightBlueBackground};
    color: ${Colors.lightBlueText};
    padding: ${Spacing[5]}px ${Spacing[2]}rem;
    margin: ${Spacing[1]}rem;
    border-radius: 5px;

`;

interface Props {
    value: string
}

const Label: FC<Props> = ({ value }) => {

    return (
        <Container>
            {value}
        </Container>
    )

}

export default Label