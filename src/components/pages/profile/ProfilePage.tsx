import Page from "components/layout/Page";
import ProfilePageView from "components/pages/profile/components/ProfilePageView";
import useAuth from "features/application/hooks/useAuth";

import { FC } from "react";
import styled from "styled-components";

const PageContainer = styled(Page)`
    position: relative;
    display: block;

`;


const ProfilePage: FC = () => {


    const user = useAuth();



    return (
        <PageContainer>
            <ProfilePageView user={user} />

        </PageContainer>
    )
}

export default ProfilePage