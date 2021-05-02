import Page from "components/layout/Page";
import LatestPublications from "components/pages/home/components/LatestPublications";
import ResumeYourWork from "components/pages/home/components/ResumeYourWork";
import Workspaces from "components/pages/home/components/Workspaces";
import { FC } from "react";
import styled from "styled-components";

const PageContainer = styled(Page)`
    position: relative;
    display: block;


`;


const HomePage: FC = () => {





    return (
        <PageContainer>

            <LatestPublications />

            <Workspaces />

            <ResumeYourWork />

        </PageContainer>
    )
}

export default HomePage