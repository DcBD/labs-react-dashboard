import { Paper } from "@material-ui/core";
import LeftMenuNavigation from "components/layout/LeftMenu/components/LeftMenuNavigation";
import UserDetails from "components/layout/LeftMenu/components/UserDetails";
import useLeftBar from "features/application/hooks/useLeftBar";
import { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Spacing } from "styledHelpers/Spacing";



const Container = styled.div<{ $hidden: boolean }>`
    ${(props) => props.$hidden && "display:none;"}
    width:250px;
    margin-right: ${Spacing[6]}rem;

`;

const NavigationContent = styled.div``;


interface LeftMenuProps {

}

const LeftMenu: FC<LeftMenuProps> = () => {

    const [visible] = useLeftBar();
    const [isVisible, setIsVisible] = useState(visible);

    useEffect(() => {
        setIsVisible(!visible);
    }, [!visible])

    return (
        <Container $hidden={isVisible}>
            <Paper>
                <UserDetails />
            </Paper>
            <NavigationContent>
                <LeftMenuNavigation />
            </NavigationContent>
        </Container>
    )
}

export default (connect(state => state, {}))(LeftMenu)
