import LabelList from "components/common/label/LabelList";
import { Icon } from "components/common/misc";
import { UserInstance } from "features/application/Application";
import { FC, useState } from "react";
import FileList from 'components/common/file/FileList'
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";
import { TextPrimaryDark, TextSecondary } from "styledHelpers/components/Text";
import { Spacing } from "styledHelpers/Spacing";
import TextInput from "components/common/misc/TextInput";
import List from "components/common/list/List/List";
import Spacer from "components/common/misc/Spacer";
import Avatar from "@material-ui/core/Avatar/Avatar";
import { v4 as uuidv4 } from 'uuid';
import { Grid } from "@material-ui/core";


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

const PanelInformations = styled.div`
    text-align:left;
    display: flex;
    flex-direction: column;
`;

const ServicesAndProjects = styled.div`
    text-align:left;
    display: flex;
    flex-direction: column;
`;

const InternalCorrespondents = styled.div`
    text-align:left;
    display: flex;
    flex-direction: column;
    margin-top:${Spacing[3]}rem;
`;

const ListItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;

`;

const ListItemColumn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: ${Spacing[2]}rem;
`;

const HourlyFee = styled.div`
    display: flex;
    align-items: center;

    > * {
        margin: ${Spacing[2]}rem;
    }
`

const UserImage = styled(Avatar)`
    height:32px !important;
    width:32px !important;
    margin-bottom: ${Spacing[2]}rem;
    margin-top: ${Spacing[2]}rem;
    margin-right: ${Spacing[3]}rem;
`;


const Proposals = styled.div`
    text-align:left;
    display: flex;
    flex-direction: column;
    position: relative;
`;

interface Props {
    toggleEditMode?: () => void,
    user: UserInstance
}

const ProfileDataEdit: FC<Props> = ({ toggleEditMode, user }) => {


    const save = () => {

    }

    const [expertiseItems, setExpertiseItems] = useState(user.company.expertise);
    const [specialitiesItems, setSpecialitiesItems] = useState(user.company.specialties);
    const [admissionToPracticeLawItems, setAddmistionToPracticeLawItems] = useState(user.company.admission_to_practice_law);
    const [countries, setCountries] = useState(user.company.countries);
    const [hourlyFee, setHourlyFee] = useState<string | number>(user.panelInformation.hourly_fee);
    const [attachments, setAttachments] = useState(user.panelInformation.attachments)
    const [servicesAndProjects, setServicesAndProjects] = useState<string>(user.panelInformation.services_and_projects)
    const [internalCorrespondents, setInternalCorrespondents] = useState(user.panelInformation.internal_correspondents)

    return (
        <Container>
            <EditButton>
                <Icon icon="check" size="14" onClick={() => toggleEditMode !== undefined && toggleEditMode()} />
            </EditButton>
            <Tags>
                <LabelList title="Expertise" labels={expertiseItems} onChange={setExpertiseItems} editable />
                <LabelList title="Specialties" labels={specialitiesItems} onChange={setSpecialitiesItems} editable />
                <LabelList title="Admission to practice law" labels={admissionToPracticeLawItems} onChange={setAddmistionToPracticeLawItems} editable />
                <LabelList title="Countries" labels={countries} onChange={setCountries} editable />
            </Tags>
            <Separator />
            <PanelInformations>
                <TextPrimaryDark marginTop={`${Spacing[3]}rem`} marginBottom={`${Spacing[1]}rem`} fontWeight="600">
                    Panel informations
                </TextPrimaryDark>
                <TextSecondary marginBottom={`${Spacing[1]}rem`}>
                    Hourly fee
                </TextSecondary>
                <TextPrimaryDark marginBottom={`${Spacing[1]}rem`}>
                    <HourlyFee>
                        <TextInput value={hourlyFee} onChange={(e) => setHourlyFee(e.target.value)} /> {user.panelInformation.currency}/hour ({user.panelInformation.type})

                    </HourlyFee>
                </TextPrimaryDark>
                <TextSecondary marginTop={`${Spacing[2]}rem`} marginBottom={`${Spacing[1]}rem`}>
                    Terms & conditions
                </TextSecondary>
                <TextPrimaryDark marginBottom={`${Spacing[1]}rem`}>
                    {user.panelInformation.terms_and_conditions}
                </TextPrimaryDark>
                <FileList files={attachments} onChange={setAttachments} />
            </PanelInformations>
            <ServicesAndProjects>
                <TextPrimaryDark marginTop={`${Spacing[3]}rem`} marginBottom={`${Spacing[1]}rem`} fontWeight="600">
                    Services & projects
                </TextPrimaryDark>
                <TextInput onChange={(e) => setServicesAndProjects(e.target.value)} value={servicesAndProjects} style={{ width: "100%" }} />
            </ServicesAndProjects>
            <InternalCorrespondents>
                <List items={internalCorrespondents.map(correspondent => <ListItem>
                    <ListItemColumn>
                        <UserImage alt="Profile picture" src="https://material-ui.com/static/images/avatar/1.jpg" />

                        <TextInput
                            placeholder={"Type text here"}
                            value={correspondent.text}
                            onChange={(e) => setInternalCorrespondents(internalCorrespondents.map(_correspondent => {
                                if (_correspondent.id == correspondent.id) {
                                    return { ..._correspondent, text: e.target.value }
                                }

                                return _correspondent;
                            }))}
                        />

                    </ListItemColumn>
                    <Spacer />
                    <ListItemColumn><Icon icon="comments" /><TextPrimaryDark>Message</TextPrimaryDark> </ListItemColumn>
                    <Spacer />
                    <ListItemColumn><Icon icon="people" /><TextPrimaryDark>Profile</TextPrimaryDark> </ListItemColumn>
                    <Spacer />
                    <ListItemColumn>
                        <Icon
                            icon="times"
                            size="10"
                            onClick={() => setInternalCorrespondents(internalCorrespondents.filter(_correspondent => _correspondent.id != correspondent.id))}
                        />
                    </ListItemColumn>
                </ListItem>)} />
                <Icon icon="plus" onClick={() => {
                    const correspondents = [...internalCorrespondents];
                    correspondents.push({ text: "", id: uuidv4() });

                    setInternalCorrespondents(correspondents)
                }} />
            </InternalCorrespondents>


        </Container >

    )

}

export default ProfileDataEdit