import Page from "components/layout/Page";
import ProfilePageView from "components/pages/profile/components/ProfilePageView";
import { UserInstance } from "features/application/Application";
import { updateProfileInformation } from "features/application/authSlice";
import useAuth from "features/application/hooks/useAuth";

import { FC, useEffect, useState } from "react";
import { connect, useStore } from "react-redux";
import styled from "styled-components";

const PageContainer = styled(Page)`
    position: relative;
    display: block;

`;


const ProfilePage: FC = () => {

    const userInstance = useAuth();

    const [user, setUser] = useState<UserInstance>(userInstance);

    useEffect(() => {

        setUser(userInstance);
    }, [userInstance])

    return (
        <PageContainer>
            <ProfilePageView user={user} />
        </PageContainer>
    )
}

export default connect((state) => state, { updateProfileInformation })(ProfilePage)