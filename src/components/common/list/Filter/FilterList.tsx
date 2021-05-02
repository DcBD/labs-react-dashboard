

import { Input } from "@material-ui/core";
import { FC, useState } from "react";
import { UtilsService } from "services/UtilsService";
import styled from "styled-components";


const Container = styled.div``;

const ItemContainer = styled.div``;

interface Item {
    title: string,
    children: React.ReactNode
}

interface Props {
    items: Array<Item>
    itemsPageCount?: number

}

const FilterList: FC<Props> = ({ items, itemsPageCount = 10 }) => {

    const [listItems, setListItems] = useState(items);
    const [page, setPage] = useState<number>(0);
    const [titleFilter, setTitleFilter] = useState<string>("");

    const filteredItems: Array<Item> = UtilsService.Filter(listItems, titleFilter, "title").slice(page, itemsPageCount);

    return (
        <Container>
            <Input type="text" onChange={(e) => setTitleFilter(e.target.value)} value={titleFilter} />
            {
                filteredItems.map(item => <ItemContainer key={item.title}>{item.children}</ItemContainer>)
            }
        </Container>
    )
}


export default FilterList;