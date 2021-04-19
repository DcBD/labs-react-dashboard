import { Paper } from "@material-ui/core";
import { postsSelectors } from "app/store";
import Image from "components/common/misc/Image";
import Spacer from "components/common/misc/Spacer";
import LatestPublicationItem from "components/pages/home/components/LatestPublicationItem";

import { FC } from "react";
import { useStore } from "react-redux";
import styled from "styled-components";
import { TextPrimary } from "styledHelpers/components/Text";
import { Spacing } from "styledHelpers/Spacing";


const Container = styled(Paper)`
    display:flex;
`;

const ImageContainer = styled.div`
    width:350px;
    height:350px;
    flex-shrink: 0;
    div{
        border-top-left-radius: 5px !important;
        border-bottom-left-radius: 5px !important;
    }

`;

const PublicationList = styled.div`
    position:relative;

`;

const PublicationsContainer = styled.div`
    padding: ${Spacing[2]}rem ${Spacing[3]}rem;
    text-align:left;
    display:flex;
    flex-direction:column;
`;


const LatestPublications: FC = () => {

    const state = useStore().getState();
    const publications = postsSelectors.selectAll(state).slice(0, 3);
    console.log(publications)

    return (
        <Container>
            <ImageContainer>
                <Image src="images/building.jpg" alt="Buildings">

                </Image>

            </ImageContainer>
            <PublicationsContainer>
                <TextPrimary fontWeight="600" fontSize="24">Latest publications </TextPrimary>
                <PublicationList>
                    {publications.map(publication => <LatestPublicationItem {...publication} key={publication.id} />)}
                </PublicationList>
                <Spacer />
                <TextPrimary fontWeight="600" fontSize="20" marginBottom={`${Spacing[1]}rem`}>See more publications </TextPrimary>
            </PublicationsContainer>
        </Container>
    )
}


export default LatestPublications;