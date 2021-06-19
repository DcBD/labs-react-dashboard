import FilterList from "components/common/list/Filter/FilterList";
import Spacer from "components/common/misc/Spacer";
import TextInput from "components/common/misc/TextInput";
import useComments from "features/api/hooks/useComments";
import { FC, useState } from "react";
import styled from "styled-components";
import { TextPrimary } from "styledHelpers/components/Text";
import { Spacing } from "styledHelpers/Spacing";
import ResumeWorkItem, { Props as ResumeWorkItemProps } from "components/pages/home/components/ResumeWorkItem";
import ListButtons from "components/pages/workspaces/ListButtons";
import useUsers from "features/api/hooks/useUsers";
import IUser from "entities/api/IUser";



const Container = styled.div`
    position: relative;
    width:100%;
    margin-top:${Spacing[4]}rem;
`

const TopHeader = styled.div`
    width:100%;
    text-align:left;
 
`

interface Props {

}

const LatestUpdates: FC<Props> = () => {

    const comments = useComments();
    const users = useUsers();

    const getUserById = (id: number): IUser => {
        return Object.values(users).filter(_user => _user.id == id)[0];
    }

    const [items, setItems] = useState<Array<ResumeWorkItemProps>>(Object.values(comments).map(comment => {
        return {
            title: comment.name,
            description: comment.body,
            contract_type: "client",
            corporation: "Corp orat inc.",
            corporation_logo: "images/logo_placeholder.png",
            postId: comment.postId,
            user: getUserById(comment.postId)
        }
    }));

    return <Container>
        <TopHeader>

            <FilterList
                name="Latest updates"
                items={
                    items.map(item => ({ title: item.title, postId: item.postId, children: <ResumeWorkItem {...item} /> }))
                }
                BeforeBodyContent={() => <ListButtons />}
            />
        </TopHeader>
    </Container>

}

export default LatestUpdates