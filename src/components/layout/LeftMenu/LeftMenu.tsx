import { Paper } from "@material-ui/core";
import { FC } from "react";
import styled from "styled-components";
import { Spacing } from "styledHelpers/Spacing";



const Container = styled.div`

    width:300px;
    margin-right: ${Spacing[6]}rem;

`;


interface LeftMenuProps {

}

const LeftMenu: FC<LeftMenuProps> = () => {


    return (
        <Container>
            <Paper>
                dasasddas
            </Paper>
        </Container>
    )
}

export default LeftMenu;