import { Avatar } from "@material-ui/core";
import Item from "components/layout/LeftMenu/components/Item";
import { FC } from "react";
import styled from "styled-components";
import { border, borderTop } from "styledHelpers/components/Borders";
import { TextPrimary, TextSecondary } from "styledHelpers/components/Text";
import { Spacing } from "styledHelpers/Spacing";

const Container = styled.div``;

const Body = styled.div`
    position:relative;
    display:flex;
    flex-direction: column;
    align-items:center;
    padding: ${Spacing[3]}rem;

`;


const Footer = styled.div`
    ${borderTop()}
    padding:${Spacing[2]}rem ${Spacing[3]}rem;
    margin-top: ${Spacing[2]}rem;

`;

const UserImage = styled(Avatar)`
    height:75px;
    width:75px;
    margin-bottom: ${Spacing[2]}rem;
    margin-top: ${Spacing[2]}rem;
`;


const UserDetails: FC = () => {


    return (
        <Container>
            <Body>
                <UserImage alt="Profile picture" src="https://material-ui.com/static/images/avatar/1.jpg" />
                <TextPrimary marginBottom={`${Spacing[1]}rem`} fontWeight="600">John Doe</TextPrimary>
                <TextSecondary>Job title - Company</TextSecondary>
            </Body>
            <Footer>
                <Item icon="people" withButton buttonIcon="user-plus">
                    Your Network
                </Item>

                <Item icon="publications" withButton buttonIcon="plus">
                    Publications
                </Item>
            </Footer>

        </Container>
    )
}

export default UserDetails;