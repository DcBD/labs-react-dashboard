import { Avatar } from "@material-ui/core";
import Item from "components/layout/LeftMenu/components/Item";
import { updateProfileInformation } from "features/application/authSlice";
import useAuth from "features/application/hooks/useAuth";
import { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import useRouting from "services/hooks/useRouting";
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
   
    margin-top: ${Spacing[2]}rem;

`;

const UserImage = styled(Avatar)`
    height:75px;
    width:75px;
    margin-bottom: ${Spacing[2]}rem;
    margin-top: ${Spacing[2]}rem;
`;


const UserDetails: FC = () => {
    const userInstance = useAuth();
    const [user, setUser] = useState(userInstance);

    useEffect(() => {
        setUser(userInstance);
    }, [userInstance])

    const routing = useRouting();

    return (
        <Container>
            <Body>
                <UserImage alt="Profile picture" src="https://material-ui.com/static/images/avatar/1.jpg" onClick={() => routing.redirect("profile")} />
                <TextPrimary marginBottom={`${Spacing[1]}rem`} fontWeight="600">{user.name} {user.surname}</TextPrimary>
                <TextSecondary>{user.company.job_title} - {user.company.name}</TextSecondary>
            </Body>
            <Footer>
                <Item icon="people" withButton buttonIcon="user-plus" onClick={() => routing.redirect("your-network-add")}>
                    Your Network
                </Item>

                <Item icon="publications" withButton buttonIcon="plus" onClick={() => routing.redirect("publications-add")}>
                    Publications
                </Item>
            </Footer>

        </Container>
    )
}

export default connect((state) => state, { updateProfileInformation })(UserDetails);