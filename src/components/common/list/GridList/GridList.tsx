import GridItem from "components/common/list/GridList/GridItem";
import IPhoto from "entities/api/IPhoto";
import { FC, useState } from "react";
import styled from "styled-components";

const Container = styled.div`

    

`;

const Header = styled.div``;

const ItemsContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    grid-template-columns: auto auto auto;
    justify-content: center;
`;


interface Props {
    items: IPhoto[]
}

const GridList: FC<Props> = ({ items }) => {

    const [photos, setPhotos] = useState<IPhoto[]>(items);

    return (
        <Container>
            <Header> </Header>
            <ItemsContainer>
                {photos.map(photo =>
                    <GridItem
                        title={photo.title}
                        description="Lorem 1250, Ipsum dolor Amet, Venezuela"
                        image={photo.thumbnailUrl}
                        following={photo.id % 2 == 0}
                    />)}
            </ItemsContainer>

        </Container>
    )
}

export default GridList