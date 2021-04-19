import Page from "components/layout/Page";
import LatestPublications from "components/pages/home/components/LatestPublications";
import { FC } from "react";
import styled from "styled-components";

const PageContainer = styled(Page)``;


const HomePage: FC = () => {



    return (
        <PageContainer>
            <LatestPublications />


        </PageContainer>
    )
}

export default HomePage