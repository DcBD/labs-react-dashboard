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

import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { useDispatch } from "react-redux";
import { updateProfileData } from "features/application/authSlice";


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
    top: 0;
    margin:${Spacing[2]}rem;
`


const CloseButton = styled.div`
    position: absolute;
    right: 25px;
    margin:${Spacing[2]}rem;
    top: 0;
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

const DataGridList = styled(DataGrid)`
    border: none !important;


    * {
        border: none !important;
    }

    .MuiDataGrid-columnsContainer{
        border-bottom:solid ${Colors.grayBorder} 1px !important;
    }
 
`;

const Grid = styled.div`
    position: relative;
    width:100%;
    height: 320px;
`;

const AmountOfFees = styled.div`
    text-align:left;
    display: flex;
    flex-direction: column;
    position: relative;
`

const InternalReviews = styled.div`
    text-align:left;
    display: flex;
    flex-direction: column;
    position: relative;
`

const proposalsColumns: GridColDef[] = [
    { field: 'name', headerName: "Name", flex: 1, editable: true },
    { field: 'entity', headerName: "Entity", flex: 1, editable: true },
    { field: 'location', headerName: "Location", flex: 1, editable: true },
    { field: 'expertise', headerName: "Expertise", flex: 1, editable: true },
    { field: 'date', headerName: "Date", flex: 1, editable: true },
    { field: 'firm', headerName: "Firm", flex: 1, editable: true },
];

const internalReviewsColumns: GridColDef[] = [
    { field: 'name', headerName: "Name", flex: 1, editable: true },
    { field: 'entity', headerName: "Entity", flex: 1, editable: true },
    { field: 'location', headerName: "Location", flex: 1, editable: true },
    { field: 'expertise', headerName: "Expertise", flex: 1, editable: true },
    { field: 'date', headerName: "Date", flex: 1, editable: true },
];

const amountOfFeesColumns: GridColDef[] = [
    { field: 'year', headerName: "Year", flex: 1, editable: true },
    { field: 'cost_center', headerName: "Const center", flex: 1, editable: true },
    { field: 'total_amount', headerName: "Total amount", flex: 1, editable: true },
    { field: 'law_firm', headerName: "Law firm", flex: 1, editable: true },
];


type ProposalColumnFields = "name" | "entity" | "location" | "expertise" | "date" | "firm"
type InternalReviewsFields = "name" | "entity" | "location" | "expertise" | "date"
type AmountOfFeesFields = "year" | "cost_center" | "total_amount" | "law_firm"


interface Props {
    toggleEditMode?: () => void,
    user: UserInstance
}

const ProfileDataEdit: FC<Props> = ({ toggleEditMode, user }) => {
    const dispatch = useDispatch();

    const [expertiseItems, setExpertiseItems] = useState(user.company.expertise);
    const [specialitiesItems, setSpecialitiesItems] = useState(user.company.specialties);
    const [admissionToPracticeLawItems, setAddmistionToPracticeLawItems] = useState(user.company.admission_to_practice_law);
    const [countries, setCountries] = useState(user.company.countries);
    const [hourlyFee, setHourlyFee] = useState<string | number>(user.panelInformation.hourly_fee);
    const [attachments, setAttachments] = useState(user.panelInformation.attachments)
    const [servicesAndProjects, setServicesAndProjects] = useState<string>(user.panelInformation.services_and_projects)
    const [internalCorrespondents, setInternalCorrespondents] = useState(user.panelInformation.internal_correspondents)
    const [proposals, setProposals] = useState(user.proposals);
    const [internalReviews, setInternalReviews] = useState(user.internalReviews)
    const [amountOfFees, setAmountOfFees] = useState(user.amountOfFees)





    const save = () => {
        dispatch(updateProfileData({
            expertiseItems: expertiseItems.map(item => {
                return { id: item.id, label: item.label }
            }),
            specialitiesItems: specialitiesItems.map(item => {
                return { id: item.id, label: item.label }
            }),
            admissionToPracticeLawItems: admissionToPracticeLawItems.map(item => {
                return { id: item.id, label: item.label }
            }),
            countries: countries.map(item => {
                return { id: item.id, label: item.label }
            }),
            hourlyFee: hourlyFee,
            attachments: attachments,
            servicesAndProjects: servicesAndProjects,
            internalCorrespondents: internalCorrespondents,
            proposals: proposals,
            internalReviews: internalReviews,
            amountOfFees: amountOfFees,
        }));

        if (toggleEditMode) {
            toggleEditMode();
        }

    }

    const handleProposalsUpdate = ({ id, field, value }: { id: number, field: ProposalColumnFields, value: string }) => {
        const _proposals = [...proposals];

        setProposals(_proposals.map(proposal => {
            if (proposal.id === id) {
                const edited = { ...proposal };
                edited[field] = value;
                return edited;
            } else {
                return proposal;
            }
        }))
    }

    const handleInternalReviewsUpdate = ({ id, field, value }: { id: number, field: InternalReviewsFields, value: string }) => {
        const _internalReviews = [...internalReviews];

        setInternalReviews(_internalReviews.map(internalReview => {
            if (internalReview.id === id) {
                const edited = { ...internalReview };
                edited[field] = value;
                return edited;
            } else {
                return internalReview;
            }
        }))
    }

    const handleAmountOfFeesUpdate = ({ id, field, value }: { id: number, field: AmountOfFeesFields, value: string }) => {
        const _amountOfFees = [...amountOfFees];

        setAmountOfFees(_amountOfFees.map(amountOfFeesInstance => {
            if (amountOfFeesInstance.id === id) {
                const edited = { ...amountOfFeesInstance };
                edited[field] = value;
                return edited;
            } else {
                return amountOfFeesInstance;
            }
        }))
    }


    return (
        <Container>
            <EditButton>
                <Icon icon="check" size="14" onClick={() => save()} />
            </EditButton>
            <CloseButton>
                <Icon icon="times" size="12" onClick={() => toggleEditMode !== undefined && toggleEditMode()} />
            </CloseButton>
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
                        <UserImage alt="Profile picture" src="/images/avatar.png" />

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
            <Proposals>

                <TextPrimaryDark marginTop={`${Spacing[3]}rem`} marginBottom={`${Spacing[4]}rem`} fontWeight="600">
                    Proposals
                </TextPrimaryDark>


                <Grid>
                    <DataGridList
                        rows={proposals}
                        columns={proposalsColumns}
                        pageSize={5}
                        disableExtendRowFullWidth={true}
                        showColumnRightBorder={false}
                        showCellRightBorder={false}
                        hideFooter
                        onEditCellChangeCommitted={(params) => {
                            handleProposalsUpdate({ id: params.id as number, field: params.field as ProposalColumnFields, value: params.props.value as string })
                        }}

                    />
                </Grid>
            </Proposals>
            <Separator />
            <InternalReviews>
                <TextPrimaryDark marginTop={`${Spacing[3]}rem`} marginBottom={`${Spacing[4]}rem`} fontWeight="600">
                    Internal reviews
                </TextPrimaryDark>
                <Grid>
                    <DataGridList
                        rows={internalReviews}
                        columns={internalReviewsColumns}
                        pageSize={5}
                        disableExtendRowFullWidth={true}
                        showColumnRightBorder={false}
                        showCellRightBorder={false}
                        hideFooter
                        onEditCellChangeCommitted={(params) => {
                            handleInternalReviewsUpdate({ id: params.id as number, field: params.field as InternalReviewsFields, value: params.props.value as string })
                        }}

                    />
                </Grid>
            </InternalReviews>
            <AmountOfFees>
                <TextPrimaryDark marginTop={`${Spacing[3]}rem`} marginBottom={`${Spacing[4]}rem`} fontWeight="600">
                    Amount of fees
                </TextPrimaryDark>
                <Grid>
                    <DataGridList
                        rows={amountOfFees}
                        columns={amountOfFeesColumns}
                        pageSize={5}
                        disableExtendRowFullWidth={true}
                        showColumnRightBorder={false}
                        showCellRightBorder={false}
                        hideFooter
                        onEditCellChangeCommitted={(params) => {
                            handleAmountOfFeesUpdate({ id: params.id as number, field: params.field as AmountOfFeesFields, value: params.props.value as string })
                        }}
                    />
                </Grid>
            </AmountOfFees>
        </Container >

    )

}

export default ProfileDataEdit