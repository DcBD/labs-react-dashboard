import { Avatar, Card } from "@material-ui/core";
import LabelList from "components/common/label/LabelList";

import ProfileInformationView from "components/pages/profile/components/ProfileInformationView";
import ProfileDataView from "components/pages/profile/components/ProfileDataView";
import { UserInstance } from "features/application/Application";
import { Component, FC } from "react";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";
import { TextBlueLight, TextDefault } from "styledHelpers/components/Text";

import { Spacing } from "styledHelpers/Spacing";
import ProfileInformationEdit from "components/pages/profile/components/ProfileInformationEdit";
import { useDispatch } from "react-redux";
import ProfileDataEdit from "components/pages/profile/components/ProfileDataEdit";


const Container = styled(Card)`
    position: relative;

    margin: ${Spacing[2]}rem 0;
    /* padding:  ${Spacing[2]}rem; */

`;




const PanelInformation = styled.div``

const Proposal = styled.div``

const InternalReviews = styled.div``

const AmountOfFees = styled.div``

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

const Separator = styled.div`
    height: 1px;
    background-color: ${Colors.grayBackground};
    width:100%;

    margin: ${Spacing[3]}rem 0;
`;


interface Props {
    user: UserInstance
}

interface State {
    isEditProfileInformation: boolean,
    isEditProfileData: boolean
}


class ProfilePageView extends Component<Props, State> {


    constructor(props: Props) {
        super(props);

        this.state = {
            isEditProfileInformation: false,
            isEditProfileData: false,
        }
    }

    handleToggleEditProfileInformation = () => {
        this.setState({ isEditProfileInformation: !this.state.isEditProfileInformation });
    }

    afterSaveProfileInformation = () => {


        this.handleToggleEditProfileInformation();
    }

    handleToggleEditProfileData = () => {
        this.setState({ isEditProfileData: !this.state.isEditProfileData });
    }



    render = () => {

        const { user } = this.props;
        const { isEditProfileInformation, isEditProfileData } = this.state;

        return (
            <Container>
                {!isEditProfileInformation && <ProfileInformationView user={user} toggleEditMode={this.handleToggleEditProfileInformation} />}
                {isEditProfileInformation && <ProfileInformationEdit user={user} afterSave={this.afterSaveProfileInformation} />}
                <Separator />
                {!isEditProfileData && <ProfileDataView user={user} toggleEditMode={this.handleToggleEditProfileData} />}
                {isEditProfileData && <ProfileDataEdit toggleEditMode={this.handleToggleEditProfileData} user={user} />}
            </Container>
        );
    }

}

export default ProfilePageView;

