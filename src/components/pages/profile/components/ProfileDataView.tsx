import LabelList from "components/common/label/LabelList";
import { UserInstance } from "features/application/Application";
import { FC } from "react-transition-group/node_modules/@types/react";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";
import { TextBlueLight, TextDefault, TextPrimaryDark, TextSecondary } from "styledHelpers/components/Text";
import { Spacing } from "styledHelpers/Spacing";
import FileList from 'components/common/file/FileList'
import List from "components/common/list/List/List";
import { Avatar } from "@material-ui/core";
import Icon from "components/common/misc/Icon";
import Spacer from "components/common/misc/Spacer";
import { DataGrid, GridColDef } from '@material-ui/data-grid';

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


const Grid = styled.div`
    position: relative;
    width:100%;
    height: 320px;
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

const InternalReviews = styled.div`
    text-align:left;
    display: flex;
    flex-direction: column;
    position: relative;
`

const AmountOfFees = styled.div`
    text-align:left;
    display: flex;
    flex-direction: column;
    position: relative;
`


const EditButton = styled.div`
    position: absolute;
    right: 0;
    margin:${Spacing[2]}rem;
`

const proposalsColumns: GridColDef[] = [
    { field: 'name', headerName: "Name", flex: 1 },
    { field: 'entity', headerName: "Entity", flex: 1 },
    { field: 'location', headerName: "Location", flex: 1 },
    { field: 'expertise', headerName: "Expertise", flex: 1 },
    { field: 'date', headerName: "Date", flex: 1 },
    { field: 'firm', headerName: "Firm", flex: 1 },
];

const internalReviewsColumns: GridColDef[] = [
    { field: 'name', headerName: "Name", flex: 1 },
    { field: 'entity', headerName: "Entity", flex: 1 },
    { field: 'location', headerName: "Location", flex: 1 },
    { field: 'expertise', headerName: "Expertise", flex: 1 },
    { field: 'date', headerName: "Date", flex: 1 },
];

const amountOfFeesColumns: GridColDef[] = [
    { field: 'year', headerName: "Year", flex: 1 },
    { field: 'cost_center', headerName: "Const center", flex: 1 },
    { field: 'total_amount', headerName: "Total amount", flex: 1 },
    { field: 'law_firm', headerName: "Law firm", flex: 1 },
];



interface Props {
    user: UserInstance,
    toggleEditMode?: () => void
}

const ProfileDataView: FC<Props> = ({ user, toggleEditMode }) => {

    return (
        <Container>
            <EditButton>
                <Icon icon="pencil" size="14" onClick={() => toggleEditMode !== undefined && toggleEditMode()} />
            </EditButton>
            <Tags>

                <LabelList title="Expertise" labels={user.company.expertise} />
                <LabelList title="Specialties" labels={user.company.specialties} />
                <LabelList title="Admission to practice law" labels={user.company.admission_to_practice_law} />
                <LabelList title="Countries" labels={user.company.countries} />

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
                    {user.panelInformation.hourly_fee}{user.panelInformation.currency}/hour ({user.panelInformation.type})
                </TextPrimaryDark>
                <TextSecondary marginTop={`${Spacing[2]}rem`} marginBottom={`${Spacing[1]}rem`}>
                    Terms & conditions
                </TextSecondary>
                <TextPrimaryDark marginBottom={`${Spacing[1]}rem`}>
                    {user.panelInformation.terms_and_conditions}
                </TextPrimaryDark>
                <FileList files={user.panelInformation.attachments} />
            </PanelInformations>
            <ServicesAndProjects>
                <TextPrimaryDark marginTop={`${Spacing[3]}rem`} marginBottom={`${Spacing[1]}rem`} fontWeight="600">
                    Services & projects
                </TextPrimaryDark>
                <TextPrimaryDark marginBottom={`${Spacing[1]}rem`}>
                    {user.panelInformation.services_and_projects}
                </TextPrimaryDark>
            </ServicesAndProjects>

            <InternalCorrespondents>
                <List items={user.panelInformation.internal_correspondents.map(correspondent => <ListItem>
                    <ListItemColumn>
                        <UserImage alt="Profile picture" src="https://material-ui.com/static/images/avatar/1.jpg" /><TextPrimaryDark fontWeight="500">{correspondent.text}</TextPrimaryDark>
                    </ListItemColumn>
                    <Spacer />
                    <ListItemColumn><Icon icon="comments" /><TextPrimaryDark>Message</TextPrimaryDark> </ListItemColumn>
                    <Spacer />
                    <ListItemColumn><Icon icon="people" /><TextPrimaryDark>Profile</TextPrimaryDark> </ListItemColumn>
                    <Spacer />
                </ListItem>)} />
            </InternalCorrespondents>
            <Separator />
            <Proposals>

                <TextPrimaryDark marginTop={`${Spacing[3]}rem`} marginBottom={`${Spacing[4]}rem`} fontWeight="600">
                    Proposals
                </TextPrimaryDark>


                <Grid>
                    <DataGridList
                        rows={user.proposals}
                        columns={proposalsColumns}
                        pageSize={5}
                        disableExtendRowFullWidth={true}
                        showColumnRightBorder={false}
                        showCellRightBorder={false}
                        hideFooter
                    />
                </Grid>
                <TextBlueLight marginLeft="auto" marginRight={`${Spacing[3]}rem`} fontSize="20" fontWeight="500">
                    See more proposals
                </TextBlueLight>
            </Proposals>
            <Separator />
            <InternalReviews>
                <TextPrimaryDark marginTop={`${Spacing[3]}rem`} marginBottom={`${Spacing[4]}rem`} fontWeight="600">
                    Internal reviews
                </TextPrimaryDark>
                <Grid>
                    <DataGridList
                        rows={user.internalReviews}
                        columns={internalReviewsColumns}
                        pageSize={5}
                        disableExtendRowFullWidth={true}
                        showColumnRightBorder={false}
                        showCellRightBorder={false}
                        hideFooter
                    />
                </Grid>
                <TextPrimaryDark marginRight="auto" marginLeft={`${Spacing[3]}rem`} fontSize="20" fontWeight="500">
                    See more Reviews
                </TextPrimaryDark>
            </InternalReviews>
            <Separator />
            <AmountOfFees>
                <TextPrimaryDark marginTop={`${Spacing[3]}rem`} marginBottom={`${Spacing[4]}rem`} fontWeight="600">
                    Amount of fees
                </TextPrimaryDark>
                <Grid>
                    <DataGridList
                        rows={user.amountOfFees}
                        columns={amountOfFeesColumns}
                        pageSize={5}
                        disableExtendRowFullWidth={true}
                        showColumnRightBorder={false}
                        showCellRightBorder={false}
                        hideFooter
                    />
                </Grid>
            </AmountOfFees>
        </Container>
    )
}

export default ProfileDataView;