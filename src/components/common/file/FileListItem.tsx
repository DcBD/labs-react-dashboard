import { Icon } from "components/common/misc";
import Spacer from "components/common/misc/Spacer";
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

const RemoveButton = styled.div`

`;

interface Props {
    name: string,
    onRemove?: false | ((name: string) => void)
}

const FileListItem: FC<Props> = ({ name, onRemove }) => {
    return (
        <Container>
            <Icon icon="file" size="14" /> {name}
            {onRemove && <>
                <Spacer />
                <RemoveButton>
                    <Icon icon="times" size="10" filled onClick={() => onRemove(name)} />
                </RemoveButton>
            </>}
        </Container>
    )

}

export default FileListItem;