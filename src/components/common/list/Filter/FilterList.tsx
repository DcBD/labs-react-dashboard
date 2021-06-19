

import { Card, Input, TextField } from "@material-ui/core";
import ListMenu from "components/common/list/Filter/ListMenu";
import Pagination from "components/common/list/Pagination";
import Spacer from "components/common/misc/Spacer";
import TextInput from "components/common/misc/TextInput";
import useAuth from "features/application/hooks/useAuth";
import { ReactElement, useEffect } from "react";
import { FC, useState } from "react";
import { UtilsService } from "services/UtilsService";
import styled from "styled-components";
import { TextPrimary, TextPrimaryDark, TextSecondary } from "styledHelpers/components/Text";
import { Spacing } from "styledHelpers/Spacing";


const Container = styled.div``;

const ItemContainer = styled(Card)`
    margin: ${Spacing[3]}rem;
`;

const Header = styled.div`
    display:flex;
`;


const Footer = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;
`;

const Title = styled.div``;

const SearchInput = styled(TextInput)`
    width:200px;
`;

const BeforeBody = styled.div``;

const Body = styled.div`
    margin-top: ${Spacing[4]}rem;
    min-height: 250px;
`;

interface Item {
    title: string,
    children: React.ReactNode,
    postId?: number
}

interface Props {
    items: Array<Item>
    itemsPageCount?: number,
    name: string
    BeforeBodyContent?: () => ReactElement
}


const FilterList: FC<Props> = ({ items, itemsPageCount = 10, name, BeforeBodyContent }) => {

    const user = useAuth();
    const [page, setPage] = useState<number>(0);
    const [titleFilter, setTitleFilter] = useState<string>("");
    const [filterBy, setFilterBy] = useState<string>("followed");
    const [filteredItems, setFilteredItems] = useState<Item[]>([]);

    useEffect(() => {
        setFilteredItems(UtilsService.Filter(items, titleFilter, "title").filter(item => {
            const _item = item as Item;

            if (filterBy == "my" && _item.postId == user.id) {
                return true;
            } else if (filterBy == "followed") {
                return true;
            } else {
                return false;
            }
        }));
    }, [filterBy, titleFilter])

    const paginatedItems: Array<Item> = filteredItems.slice(page * itemsPageCount, page * itemsPageCount + itemsPageCount)
    const pagesCount = Math.ceil(filteredItems.length / itemsPageCount);

    useEffect(() => {

        setPage(0);

    }, [pagesCount])

    return (
        <Container>
            <Header>
                <Title><TextPrimary fontSize="24" fontWeight="600" marginLeft="1.5rem">{name}</TextPrimary></Title>
                <Spacer />
                <SearchInput onChange={(e) => setTitleFilter(e.target.value)} value={titleFilter} placeholder="Filter by title..." />
                <ListMenu onChange={(val) => setFilterBy(val)} />
            </Header>
            {BeforeBodyContent && <BeforeBodyContent />}
            <Body>
                {
                    paginatedItems.length > 0 ? paginatedItems.map(item => <ItemContainer key={item.title}>{item.children}</ItemContainer>) :
                        (<TextSecondary>
                            No items were found.
                        </TextSecondary>)
                }
            </Body>

            <Footer>
                {pagesCount > 0 && <Pagination count={pagesCount} page={page} onChange={setPage} />}
            </Footer>
        </Container>
    )
}


export default FilterList;