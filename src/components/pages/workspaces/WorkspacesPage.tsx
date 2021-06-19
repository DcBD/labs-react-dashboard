import { Card } from "@material-ui/core";
import { Icon } from "components/common/misc";
import Image from "components/common/misc/Image";
import Page from "components/layout/Page";
import ProfilePageView from "components/pages/profile/components/ProfilePageView";
import InfoItem from "components/pages/workspaces/InfoItem";
import LatestUpdates from "components/pages/workspaces/LatestUpdates";
import { UserInstance } from "features/application/Application";
import { updateProfileInformation } from "features/application/authSlice";
import useAuth from "features/application/hooks/useAuth";

import { FC, useEffect, useState } from "react";
import { connect, useStore } from "react-redux";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";
import { TextPrimaryDark, TextSecondary } from "styledHelpers/components/Text";
import { Spacing } from "styledHelpers/Spacing";

const PageContainer = styled(Page)`
    position: relative;


`;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Banner = styled(Card)`
    height:300px;
    width:95%;
`

const BannerImage = styled.div`
    width:100%;
    height:175px;
`;

const BannerContent = styled.div`
    display:flex;
    height: 125px;
    position:relative;
`;

const BannerIcon = styled.div`
    width:50px;
    display: flex;
    align-items: center;
    margin-left: ${Spacing[3]}rem;
    path {
        fill: ${Colors.grayText};
    }
`;

const BannerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: ${Spacing[4]}rem;
    margin-top: ${Spacing[2]}rem;
    padding:${Spacing[2]}rem;
    text-align: left;
    > span {
        display: block;
        width:100%;
    }
    
`;

const BannerCog = styled.div`
    position: absolute;
    right:10px;
    top:5px;
`

const CorporateMatters = styled(Card)`
    margin-top: 100px;
    background-color: ${Colors.grayBackground} !important;
    width:100%;


    display: flex;
    > div {
        margin:auto;
    }
`

const WorkspacesPage: FC = () => {

    const userInstance = useAuth();

    const [user, setUser] = useState<UserInstance>(userInstance);

    useEffect(() => {

        setUser(userInstance);
    }, [userInstance])


    return (
        <PageContainer>
            <Container>
                <Banner>
                    <BannerImage><Image src="/images/workspaces.PNG" alt="baner" /></BannerImage>
                    <BannerContent>
                        <BannerCog>
                            <Icon icon="cog" onClick={() => alert("You don't have permissions to do that!")} />
                        </BannerCog>
                        <BannerIcon>
                            <Icon icon="entities" size="22" />
                        </BannerIcon>
                        <BannerText>
                            <TextPrimaryDark fontWeight="600" fontSize="22">Corporate holdings</TextPrimaryDark>
                            <TextSecondary marginTop={`${Spacing[2]}rem`} fontSize="18">Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.</TextSecondary>
                        </BannerText>
                    </BannerContent>
                </Banner>
                <CorporateMatters>
                    <InfoItem
                        icon="entities"
                        Title={() => <TextPrimaryDark fontSize="22">Explore your <b>entities</b></TextPrimaryDark>}
                        description="Take a few minutes to look at the most important elements and specificities of your entities"
                    />
                    <InfoItem
                        icon="privacy"
                        Title={() => <TextPrimaryDark fontSize="22">Structure the <b>ownership</b></TextPrimaryDark>}
                        description="Take a few minutes to look at the most important elements and specificities of your entities"
                    />
                    <InfoItem
                        icon="publications"
                        Title={() => <TextPrimaryDark fontSize="22">Define the <b>calendar</b></TextPrimaryDark>}
                        description="Take a few minutes to look at the most important elements and specificities of your entities"
                    />
                </CorporateMatters>
                <LatestUpdates />
            </Container>
        </PageContainer>
    )
}

export default WorkspacesPage