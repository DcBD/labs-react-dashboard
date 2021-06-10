import { Icon } from "components/common/misc";
import { FC } from "react-transition-group/node_modules/@types/react";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";
import { Spacing } from "styledHelpers/Spacing";



const Container = styled.div`

    background-color: ${Colors.lightBlueBackground};
    color: ${Colors.lightBlueText};
    padding: ${Spacing[5]}px ${Spacing[2]}rem;
    margin: ${Spacing[1]}rem;
    border-radius: 5px;
    display: flex;
    align-items: center;

`;

const Times = styled.div`
    margin-top: 3px;
    margin-left: 2px;
`;
interface Props {
    value: string
    isRemovable?: boolean
    handleRemove?: () => void
}

const Label: FC<Props> = ({ value, isRemovable = true, handleRemove = () => { } }) => {

    return (
        <Container>
            {value}
            {isRemovable && <Times><Icon icon="times" size="10" onClick={handleRemove} /></Times>}
        </Container>
    )

}

export default Label