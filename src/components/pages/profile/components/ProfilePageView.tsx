import { Card } from "@material-ui/core";
import LabelList from "components/common/label/LabelList";
import { UserInstance } from "features/application/Application";
import { FC } from "react";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";

import { Spacing } from "styledHelpers/Spacing";


const Container = styled(Card)`
    position: relative;
    display: flex;
    flex-direction:row;
    margin: ${Spacing[2]}rem 0;
    flex-shrink: 0;

`;


const ProfileInformation = styled.div``

const Expertise = styled.div``

const PanelInformation = styled.div``

const Proposal = styled.div``

const InternalReviews = styled.div``

const AmountOfFees = styled.div``



interface Props {
    user: UserInstance
}


const ProfilePageView: FC<Props> = ({ user }) => {



    return (
        <Container>
            <ProfileInformation></ProfileInformation>
            <Expertise>
                <LabelList title="Expertise" labels={user.company.expertise} />

            </Expertise>
            <PanelInformation></PanelInformation>
            <Proposal></Proposal>
            <InternalReviews></InternalReviews>
            <AmountOfFees></AmountOfFees>
        </Container>
    )
}

export default ProfilePageView;

