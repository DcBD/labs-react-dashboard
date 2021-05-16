import Item from "components/layout/LeftMenu/components/Item";
import { FC } from "react";
import useRouting from "services/hooks/useRouting";
import styled from "styled-components";


const Container = styled.div``;

const LeftMenuNavigation: FC = () => {
    const routing = useRouting();

    return (
        <Container>
            <Item icon="publications" onClick={() => routing.redirect("publications")}>
                Publications
            </Item>

            <Item icon="ecosystem" onClick={() => routing.redirect("ecosystem")}>
                Ecosystem
            </Item>

            <Item icon="entities2" onClick={() => routing.redirect("entities")}>
                Entities
            </Item>
        </Container>
    )
}


export default LeftMenuNavigation