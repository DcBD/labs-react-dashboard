import Item from "components/layout/LeftMenu/components/Item";
import { FC } from "react";
import styled from "styled-components";


const Container = styled.div``;

const LeftMenuNavigation: FC = () => {
    return (
        <Container>
            <Item icon="publications">
                Publications
            </Item>

            <Item icon="ecosystem">
                Ecosystem
            </Item>

            <Item icon="entities2">
                Entities
            </Item>
        </Container>
    )
}


export default LeftMenuNavigation