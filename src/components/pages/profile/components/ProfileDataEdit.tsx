import LabelList from "components/common/label/LabelList";
import { Icon } from "components/common/misc";
import { UserInstance } from "features/application/Application";
import { FC } from "react-transition-group/node_modules/@types/react";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";
import { Spacing } from "styledHelpers/Spacing";


const Container = styled.div`
    position: relative;
    padding: ${Spacing[3]}rem;
`


const Separator = styled.div`
    height: 1px;
    background-color: ${Colors.grayBackground};
    width:100%;
    margin: ${Spacing[3]}rem 0;
`;


const EditButton = styled.div`
    position: absolute;
    right: 0;
    margin:${Spacing[2]}rem;
`
const Tags = styled.div``;

interface Props {
    toggleEditMode?: () => void,
    user: UserInstance
}

const ProfileDataEdit: FC<Props> = ({ toggleEditMode, user }) => {

    return (
        <Container>
            <EditButton>
                <Icon icon="pencil" size="14" onClick={() => toggleEditMode !== undefined && toggleEditMode()} />
            </EditButton>
            <Tags>
                <LabelList title="Expertise" labels={user.company.expertise} editable />

            </Tags>

        </Container>

    )

}

export default ProfileDataEdit