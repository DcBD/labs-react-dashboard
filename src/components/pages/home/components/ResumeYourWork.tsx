import FilterList from "components/common/list/Filter/FilterList";
import ResumeWorkItem, { Props as ResumeWorkItemProps } from "components/pages/home/components/ResumeWorkItem";
import useComments from "features/api/hooks/useComments";
import { map } from "lodash-es";
import { useEffect, useState } from "react";
import { FC } from "react";
import styled from "styled-components";
import { Spacing } from "styledHelpers/Spacing";



const Container = styled.div`
    margin-bottom: ${Spacing[5]}rem;
`




const ResumeYourWork: FC = () => {

    const comments = useComments();
    const [items, setItems] = useState<Array<ResumeWorkItemProps>>(Object.values(comments).map(comment => {
        return {
            title: comment.name,
            description: comment.body,
            contract_type: "client",
            corporation: "Corp orat inc.",
            corporation_logo: "images/logo_placeholder.png",
            postId: comment.postId
        }
    }));



    return (
        <Container>
            <FilterList
                name="Resume your work"
                items={
                    items.map(item => ({ title: item.title, postId: item.postId, children: <ResumeWorkItem {...item} /> }))
                }
            />
        </Container>
    )
}


export default ResumeYourWork