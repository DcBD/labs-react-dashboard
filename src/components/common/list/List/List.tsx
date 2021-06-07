import { FC } from "react-transition-group/node_modules/@types/react";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";
import { Spacing } from "styledHelpers/Spacing";


const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Item = styled.div`
    width:100%;
    height: 30px;
    background-color: ${Colors.lightBlueBackground};
    margin: ${Spacing[3]}px 0;
    padding:${Spacing[2]}rem;
    display: flex;
    align-items: center;
`;

interface Props {
    items: React.ReactNode[]
}


const List: FC<Props> = ({ items }) => {

    return (
        <Container>
            {items.map(item => <Item>
                {item}
            </Item>)}
        </Container>
    )

}


export default List