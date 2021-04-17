import { Paper } from "@material-ui/core";
import LeftMenuNavigation from "components/layout/LeftMenu/components/LeftMenuNavigation";
import UserDetails from "components/layout/LeftMenu/components/UserDetails";
import { FC } from "react";
import styled from "styled-components";
import { Spacing } from "styledHelpers/Spacing";



const Container = styled.div`

    width:250px;
    margin-right: ${Spacing[6]}rem;

`;

const NavigationContent = styled.div``;


interface LeftMenuProps {

}

const LeftMenu: FC<LeftMenuProps> = () => {


    return (
        <Container>
            <Paper>
                <UserDetails />
            </Paper>
            <NavigationContent>
                <LeftMenuNavigation />
            </NavigationContent>
        </Container>
    )
}

export default LeftMenu;