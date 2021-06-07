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



class ProfilePageView extends Component<Props> {


    constructor(props: Props) {
        super(props);
    }



    render = () => {

        const { user } = this.props;

        return (
            <Container>
                <ProfileInformationView user={user} />
                <Separator />
                <ProfileDataView user={user} />
            </Container>
        );
    }

}


// const ProfilePageView: FC<Props> = ({ user }) => {


//     console.log(user.company.expertise);
//     return (
//         <Container>
//             <ProfileInformation>


//             </ProfileInformation>
//             <Separator />
//             <Expertise>
//                 <LabelList title="Expertise" labels={user.company.expertise} />
//                 <LabelList title="Specialties" labels={user.company.specialties} />
//                 <LabelList title="Admission to practice law" labels={user.company.admission_to_practice_law} />
//                 <LabelList title="Countries" labels={user.company.countries} />

//             </Expertise>
//             <PanelInformation></PanelInformation>
//             <Proposal></Proposal>
//             <InternalReviews></InternalReviews>
//             <AmountOfFees></AmountOfFees>
//         </Container>
//     )
// }

export default ProfilePageView;

