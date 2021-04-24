import { photosSelectors } from "app/store";
import Image from "components/common/misc/Image";
import Spacer from "components/common/misc/Spacer";
import UserInitials from "components/common/trademark/UserInitials";
import IPhoto from "entities/api/IPhoto";
import IPost from "entities/api/IPost";
import { FC } from "react";
import { useStore } from "react-redux";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";
import { TextPrimary, TextSecondary } from "styledHelpers/components/Text";
import { Spacing } from "styledHelpers/Spacing";


const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction:row;
    margin: ${Spacing[2]}rem 0;
    flex-shrink: 0;

`;

const PhotoContainer = styled.div`
    width: 75px;
    height: 75px;
`;

const PostDataContainer = styled.div`
    display: flex;
    flex:1;
    flex-direction: column;
    margin: ${Spacing[1]}rem ${Spacing[2]}rem;
    text-transform:capitalize;
    text-align:left;

`;

const PostDataTitle = styled.div``;
const PostDataFooter = styled.div`

    display:flex;
    flex-direction:row;
    align-content:center;
    align-items:center;

`;


const PostedUserInitials = styled.div`
    margin-left: 20px;
`;



interface Props extends IPost { }


const LatestPublicationItem: FC<Props> = ({ body, title, userId }) => {

    const state = useStore().getState();
    const photo = photosSelectors.selectById(state, 1) as IPhoto;

    return (
        <Container>
            <PhotoContainer>
                <Image src={photo.thumbnailUrl} alt="Publication" gradient={Colors.blueGradient} />
            </PhotoContainer>
            <PostDataContainer>
                <PostDataTitle>
                    <TextPrimary fontWeight="600">{title}</TextPrimary>

                </PostDataTitle>
                <Spacer />
                <PostDataFooter>
                    <TextSecondary>7 jan. 2020</TextSecondary>
                    <PostedUserInitials>

                        <UserInitials userId={userId} />

                    </PostedUserInitials>
                </PostDataFooter>
            </PostDataContainer>

        </Container>
    )
}

export default LatestPublicationItem;

