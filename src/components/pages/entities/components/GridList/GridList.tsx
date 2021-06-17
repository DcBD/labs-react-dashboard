import ListMenu from "components/common/list/Filter/ListMenu";
import GridItem from "components/pages/entities/components/GridList/GridItem";
import { DropdownMenu } from "components/common/menu";
import { Icon } from "components/common/misc";
import { ButtonBase } from "components/common/misc/Button";
import Spacer from "components/common/misc/Spacer";
import TextInput from "components/common/misc/TextInput";
import IPhoto from "entities/api/IPhoto";
import useHeader from "features/application/hooks/useHeader";
import useLeftBar from "features/application/hooks/useLeftBar";

import { FC, useRef, useState } from "react";
import { UtilsService } from "services/UtilsService";
import { Sort } from "shared/Types";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";
import { TextSecondary } from "styledHelpers/components/Text";
import { Spacing } from "styledHelpers/Spacing";
import Filters from "components/pages/entities/components/GridList/Filters";

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

const ItemsContainer = styled.div<{ $mosaic: boolean }>`
    display: ${(props) => props.$mosaic ? "flex" : "block"};
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

const OverHeader = styled.div`
    display: flex;

    align-items: right;
    justify-content: right;

    > button {
        margin: ${Spacing[2]}rem;
    }
`;

const Item = styled.div<{ $mosaic: boolean }>`
    width: ${(props) => props.$mosaic ? "300px" : "100%"};
    margin: ${Spacing[2]}rem;
    padding: ${Spacing[2]}rem;
`;

const BlueButton = styled.div`
    background: ${Colors.lightBlueBackground} !important;
    margin-right:10px;
    margin-left: auto;
`

interface Props {
    items: IPhoto[]
}

const GridList: FC<Props> = ({ items }) => {

    const [photos, setPhotos] = useState<IPhoto[]>(items);
    const [fullScreen, setFullScreen] = useState(false);
    const [isLeftBarVisible, toggleLeftBar] = useLeftBar();
    const [isHeaderVisible, toggleHeader] = useHeader();
    const currentLocationInput = useRef<HTMLTextAreaElement>(null);
    const [sort, setSort] = useState<Sort>("desc");
    const [searchPhrase, setSearchPhrase] = useState<string>("");
    const [displayMosaic, setDisplayMosaic] = useState<boolean>(true);
    const [filtersVisible, setFiltersVisible] = useState<boolean>(false);

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

    const handleSort = () => {
        setSort(sort => sort === "asc" ? "desc" : "asc");

        setPhotos(photos => UtilsService.Sort(photos, sort, 'title'));
    }

    const handleSearch = (phrase: string) => {
        setSearchPhrase(phrase);
        setPhotos(() => UtilsService.Filter(items, phrase, 'title'))
        setSort("desc");
    }

    return (
        <Container>
            {filtersVisible && <Filters close={() => setFiltersVisible(false)} />}
            <OverHeader>
                <ButtonBase onClick={() => { setDisplayMosaic(true) }} color="primary" type={displayMosaic ? "contained" : "outlined"}><Icon icon="grid" /> Mosaic</ButtonBase>
                <ButtonBase onClick={() => { setDisplayMosaic(false) }} color="primary" type={displayMosaic ? "outlined" : "contained"}><Icon icon="list" /></ButtonBase>
            </OverHeader>
            <Header>
                <BlueButton>
                    <ButtonBase color="secondary" type="outlined"> <Icon icon="search" size="12" /> All <Icon icon="arrow-down" size="12" /> </ButtonBase>

                </BlueButton>
                <Icon icon="option" size="16" />
                <Separator />
                <Icon icon={sort === "asc" ? "sort-asc" : "sort-desc"} onClick={() => handleSort()} />
                <Icon icon="filter" onClick={() => setFiltersVisible(true)} />
                <Separator />
                <Icon icon={fullScreen ? "fullscreen" : "resize"} onClick={handleToggleFullScreen} />
                <Separator />
                <Icon icon="share" onClick={handleShare} />
                <TextSecondary>Share</TextSecondary>
                <Spacer />
                <TextInput value={searchPhrase} onChange={(e) => handleSearch(e.target.value)} placeholder="Search by title..." />
                <Separator />
                <ListMenu onChange={(value) => setPhotos(_photos => items.filter(photo => value === "my" ? photo.id % 2 == 0 && photo.id < 20 : true))} />

            </Header>
            <ItemsContainer $mosaic={displayMosaic}>
                {photos.map(photo =>
                    <Item $mosaic={displayMosaic}>
                        <GridItem
                            title={photo.title}
                            description="Lorem 1250, Ipsum dolor Amet, Venezuela"
                            image={photo.thumbnailUrl}
                            following={photo.id % 2 == 0}
                        />
                    </Item>
                )}
            </ItemsContainer>

            <Hidden>
                <textarea ref={currentLocationInput} value={window.location.href} />
            </Hidden>

        </Container>
    )
}

export default GridList