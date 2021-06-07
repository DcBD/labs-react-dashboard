
import { Avatar } from "@material-ui/core";
import Spacer from "components/common/misc/Spacer";
import { UserInstance } from "features/application/Application";
import { FC } from "react-transition-group/node_modules/@types/react";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";
import { TextBlueLight, TextDefault, TextPrimaryDark } from "styledHelpers/components/Text";
import { Spacing } from "styledHelpers/Spacing";



const Container = styled.div`
    display: flex;
`

const ProfileAvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100px;

`;

const ProfileInitialsContainer = styled.div`

    display: flex;
    flex-direction: column;
    margin-left: ${Spacing[2]}rem;
    align-items: center;
    justify-content: center;

    *{
        text-align: left;
        width: 100%;
    }
`;

const ProfileContactContainer = styled.div`
    margin-right: ${Spacing[4]}rem;
    display: flex;
    flex-direction: column;
    justify-content: end;

`;

const UserImage = styled(Avatar)`
    height:60px !important;
    width:60px !important;
    margin-bottom: ${Spacing[2]}rem;
    margin-top: ${Spacing[2]}rem;
`;


interface Props {
    user: UserInstance
}


const ProfileInformationView: FC<Props> = ({ user }: Props) => {

    return (
        <Container>
            <ProfileAvatarContainer>
                <UserImage alt="Profile picture" src="https://material-ui.com/static/images/avatar/1.jpg" />
                <TextBlueLight>
                    See profile
                </TextBlueLight>
            </ProfileAvatarContainer>

            <ProfileInitialsContainer>
                <TextPrimaryDark fontWeight="600">
                    {user.name} {user.surname}
                </TextPrimaryDark>
                <TextPrimaryDark fontSize="14">
                    {user.company.job_title}
                </TextPrimaryDark>
            </ProfileInitialsContainer>
            <Spacer />
            <ProfileContactContainer>

                <TextPrimaryDark marginBottom="5px">
                    {user.email}
                </TextPrimaryDark>
                <TextPrimaryDark>
                    {user.phone}
                </TextPrimaryDark>
            </ProfileContactContainer>
        </Container>

    )

}


export default ProfileInformationView;
