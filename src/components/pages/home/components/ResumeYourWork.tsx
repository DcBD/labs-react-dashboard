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

const getData = (count: number): Array<ResumeWorkItemProps> => {

    const data: Array<ResumeWorkItemProps> = [];

    for (let i: number = 0; i < count; i++) {
        data.push({
            contract_type: "corporate",
            corporation: "Subsid. corp.",
            corporation_logo: "images/logo_placeholder.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentasque et henderit orci Donec vehicula justo ut nulla aliquet, ac tincidunt m,etus trisnque.",
            title: "World company " + (i + 1)
        })
    }

    return data;
}



const ResumeYourWork: FC = () => {

    const comments = useComments();
    const [items, setItems] = useState<Array<ResumeWorkItemProps>>(Object.values(comments).map(comment => {
        return {
            title: comment.name,
            description: comment.body,
            contract_type: "client",
            corporation: "Corp orat inc.",
            corporation_logo: "images/logo_placeholder.png",
        }
    }));



    return (
        <Container>
            <FilterList
                name="Resume your work"
                items={
                    items.map(item => ({ title: item.title, children: <ResumeWorkItem {...item} /> }))
                }
            />
        </Container>
    )
}


export default ResumeYourWork