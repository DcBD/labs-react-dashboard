
import Page from "components/layout/Page";
import GridList from "components/pages/entities/components/GridList/GridList";
import usePhotos from "features/api/hooks/usePhotos";

import { FC, useState } from "react";
import styled from "styled-components";

const PageContainer = styled(Page)`
    position: relative;
    display: block;
`;


const EntitiesPage: FC = () => {


    const photos = Object.values(usePhotos()).slice(0, 50);


    return (
        <PageContainer>
            <GridList items={photos} />


        </PageContainer>
    )
}

export default EntitiesPage