import { Icon } from "components/common/misc";
import { FC } from "react-transition-group/node_modules/@types/react";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";
import { Spacing } from "styledHelpers/Spacing";


const Container = styled.div`
    height: 25px;
    padding: ${Spacing[2]}rem;
    margin: ${Spacing[2]}rem 0;
    background-color: ${Colors.lightBlueBackground};
    display:flex;
    align-items: center;
  
`;

interface Props {
    name: string
}

const FileListItem: FC<Props> = ({ name }) => {
    return (
        <Container>
            <Icon icon="file" size="14" /> {name}
        </Container>
    )

}

export default FileListItem;