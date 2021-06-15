import GridItem from "components/common/list/GridList/GridItem";
import { Icon } from "components/common/misc";
import IPhoto from "entities/api/IPhoto";
import useHeader from "features/application/hooks/useHeader";
import useLeftBar from "features/application/hooks/useLeftBar";

import { FC, useRef, useState } from "react";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";
import { Spacing } from "styledHelpers/Spacing";

const Container = styled.div`

    

`;

const Header = styled.div`

    position: relative;
    height: 50px;
    display: flex;
    align-items: center;

    svg{
        fill: ${Colors.grayText};

    }
`;

const Separator = styled.div`
    width: 1px;
    height: 100%;
    background-color: ${Colors.grayBorder};

    margin: 0 ${Spacing[3]}rem;
`;

const ItemsContainer = styled.div`
    display: flex;
    flex-wrap:wrap;
    grid-template-columns: auto auto auto;
    justify-content: center;
`;

const Hidden = styled.div`
    position: absolute;
    width: 0px;
    height: 0px;
    overflow: hidden;
`;

interface Props {
    items: IPhoto[]
}

const GridList: FC<Props> = ({ items }) => {

    const [photos, setPhotos] = useState<IPhoto[]>(items);
    const [fullScreen, setFullScreen] = useState(false);
    const [isLeftBarVisible, toggleLeftBar] = useLeftBar();
    const [isHeaderVisible, toggleHeader] = useHeader();
    const currentLocationInput = useRef<HTMLTextAreaElement>(null);

    const handleToggleFullScreen = () => {
        toggleLeftBar(!isLeftBarVisible);
        toggleHeader(!isHeaderVisible);
        setFullScreen(isFullScreen => !isFullScreen);
    }

    const handleShare = () => {
        const el = currentLocationInput.current;

        el?.select();
        el?.setSelectionRange(0, 99999);

        document.execCommand("copy")


    }

    return (
        <Container>
            <Header>
                <Separator />
                <Icon icon={fullScreen ? "resize" : "fullscreen"} onClick={handleToggleFullScreen} />
                <Separator />
                <Icon icon="share" onClick={handleShare} />
            </Header>
            <ItemsContainer>
                {photos.map(photo =>
                    <GridItem
                        title={photo.title}
                        description="Lorem 1250, Ipsum dolor Amet, Venezuela"
                        image={photo.thumbnailUrl}
                        following={photo.id % 2 == 0}
                    />)}
            </ItemsContainer>

            <Hidden>
                <textarea ref={currentLocationInput} value={window.location.href} />
            </Hidden>

        </Container>
    )
}

export default GridList