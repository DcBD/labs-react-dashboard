import { Avatar } from "@material-ui/core";
import { Icon } from "components/common/misc";
import Spacer from "components/common/misc/Spacer";
import TextInput from "components/common/misc/TextInput";
import { UserInstance } from "features/application/Application";
import { updateProfileInformation } from "features/application/authSlice";
import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { TextBlueLight, TextPrimaryDark } from "styledHelpers/components/Text";
import { Spacing } from "styledHelpers/Spacing";



const Container = styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
`

const SaveButton = styled.div`
    position: absolute;
    right: 0;
    margin:${Spacing[2]}rem;
`

const UserImage = styled(Avatar)`
    height:60px !important;
    width:60px !important;
    margin-bottom: ${Spacing[2]}rem;
    margin-top: ${Spacing[2]}rem;
`;


const ProfileAvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100px;
`;

const ProfileInitialsContainer = styled.div`

    display: flex;
    flex-direction: column;
    margin-left: ${Spacing[2]}rem;
    align-items: center;
    justify-content: center;

    *{
        text-align: left;
        width: 100%;
    }
`;

const TextInputMargin = styled(TextInput)`
    margin: ${Spacing[1]}rem;
    width:100% !important;

`

const Flex = styled.div`
    display: flex;
`;

const ProfileContactContainer = styled.div`
    margin-right: ${Spacing[6]}rem;
    display: flex;
    flex-direction: column;
    justify-content: end;
    width:300px;

`;

interface Props {
    user: UserInstance,
    afterSave: () => void
}

const ProfileInformationEdit: FC<Props> = ({ user, afterSave }) => {

    const dispatch = useDispatch();

    const [name, setName] = useState<string>(user.name);
    const [surname, setSurname] = useState<string>(user.surname);
    const [job_title, setJobTitle] = useState<string>(user.company.job_title);
    const [phone, setPhone] = useState<string>(user.phone);
    const [email, setEmail] = useState<string>(user.email);

    const save = () => {
        afterSave();
        dispatch(updateProfileInformation({ name: name, surname: surname, job_title: job_title, phone: phone, email: email }));


    }

    return (<Container>
        <SaveButton>
            <Icon icon="check" size="14" onClick={() => save()} />
        </SaveButton>
        <ProfileAvatarContainer>
            <UserImage alt="Profile picture" src="https://material-ui.com/static/images/avatar/1.jpg" />
            <TextBlueLight>
                See profile
            </TextBlueLight>
        </ProfileAvatarContainer>
        <ProfileInitialsContainer>
            <Flex>
                <TextInputMargin value={name} onChange={(e) => setName(e.target.value)} />
                <Spacer />
                <TextInputMargin value={surname} onChange={(e) => setSurname(e.target.value)} />
            </Flex>
            <Flex>
                <TextInputMargin value={job_title} onChange={(e) => setJobTitle(e.target.value)} />
            </Flex>
        </ProfileInitialsContainer>
        <Spacer />
        <ProfileContactContainer>
            <TextInputMargin value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextInputMargin value={phone} onChange={(e) => setPhone(e.target.value)} />
        </ProfileContactContainer>
    </Container>)
}

export default ProfileInformationEdit