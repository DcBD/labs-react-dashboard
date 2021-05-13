

import { Card, Input, TextField } from "@material-ui/core";
import ListMenu from "components/common/list/Filter/ListMenu";
import Pagination from "components/common/list/Pagination";
import Spacer from "components/common/misc/Spacer";
import TextInput from "components/common/misc/TextInput";
import { useEffect } from "react";
import { FC, useState } from "react";
import { UtilsService } from "services/UtilsService";
import styled from "styled-components";
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

interface Item {
    title: string,
    children: React.ReactNode
}

interface Props {
    items: Array<Item>
    itemsPageCount?: number,
    name: string

}

const FilterList: FC<Props> = ({ items, itemsPageCount = 10, name }) => {


    const [page, setPage] = useState<number>(0);
    const [titleFilter, setTitleFilter] = useState<string>("");

    const filteredItems: Array<Item> = UtilsService.Filter(items, titleFilter, "title");
    const paginatedItems: Array<Item> = filteredItems.slice(page * itemsPageCount, page * itemsPageCount + itemsPageCount)
    const pagesCount = Math.ceil(filteredItems.length / itemsPageCount);

    useEffect(() => {

        setPage(0);

    }, [pagesCount])

    return (
        <Container>
            <Header>
                <Title>{name}</Title>
                <Spacer />
                <SearchInput onChange={(e) => setTitleFilter(e.target.value)} value={titleFilter} placeholder="Filter by title..." />
                <ListMenu />
            </Header>
            {
                paginatedItems.map(item => <ItemContainer key={item.title}>{item.children}</ItemContainer>)
            }
            <Footer>
                <Pagination count={pagesCount} page={page} onChange={setPage} />
            </Footer>
        </Container>
    )
}


export default FilterList;