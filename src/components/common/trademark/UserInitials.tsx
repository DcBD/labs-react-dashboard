import { Avatar } from "@material-ui/core";
import { photosSelectors, usersSelectors } from "app/store";
import IPhoto from "entities/api/IPhoto";
import IUser from "entities/api/IUser";
import { FC } from "react";
import { useStore } from "react-redux";
import styled from "styled-components";
import { TextPrimary } from "styledHelpers/components/Text";
import { Spacing } from "styledHelpers/Spacing";


interface Props {
    userId: number
}


const Container = styled.div`
    position:relative;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    align-content:center;
    
`;

const UserImage = styled(Avatar)`
    height:25px  !important;
    width:25px !important;
    margin-right: ${Spacing[2]}rem;
`;

const UserInitials: FC<Props> = ({ userId }) => {

    const state = useStore().getState();

    const user = usersSelectors.selectById(state, userId) as IUser;
    const photo = photosSelectors.selectById(state, userId) as IPhoto;

    return (
        <Container>
            <UserImage src={photo.thumbnailUrl} />
            <TextPrimary>{user.name}</TextPrimary>
        </Container>
    )
}

export default UserInitials;