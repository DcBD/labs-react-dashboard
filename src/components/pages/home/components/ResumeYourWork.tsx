import FilterList from "components/common/list/Filter/FilterList";
import ResumeWorkItem, { Props as ResumeWorkItemProps } from "components/pages/home/components/ResumeWorkItem";
import { FC } from "react";
import styled from "styled-components";



const Container = styled.div``

const data: Array<ResumeWorkItemProps> = [
    {
        contract_type: "corporate",
        corporation: "Subsid. corp.",
        corporation_logo: "images/logo_placeholder.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentasque et henderit orci Donec vehicula justo ut nulla aliquet, ac tincidunt m,etus trisnque.",
        title: "World company Sas"
    },
    {
        contract_type: "corporate",
        corporation: "Subsid. corp.",
        corporation_logo: "images/logo_placeholder.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentasque et henderit orci Donec vehicula justo ut nulla aliquet, ac tincidunt m,etus trisnque.",
        title: "Contract #140"
    },
    {
        contract_type: "corporate",
        corporation: "Subsid. corp.",
        corporation_logo: "images/logo_placeholder.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentasque et henderit orci Donec vehicula justo ut nulla aliquet, ac tincidunt m,etus trisnque.",
        title: "Contract #141"
    },
    {
        contract_type: "corporate",
        corporation: "Subsid. corp.",
        corporation_logo: "images/logo_placeholder.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentasque et henderit orci Donec vehicula justo ut nulla aliquet, ac tincidunt m,etus trisnque.",
        title: "Contract #142"
    },
    {
        contract_type: "corporate",
        corporation: "Subsid. corp.",
        corporation_logo: "images/logo_placeholder.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentasque et henderit orci Donec vehicula justo ut nulla aliquet, ac tincidunt m,etus trisnque.",
        title: "Contract #143"
    },
    {
        contract_type: "corporate",
        corporation: "Subsid. corp.",
        corporation_logo: "images/logo_placeholder.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentasque et henderit orci Donec vehicula justo ut nulla aliquet, ac tincidunt m,etus trisnque.",
        title: "Contract #144"
    },
    {
        contract_type: "corporate",
        corporation: "Subsid. corp.",
        corporation_logo: "images/logo_placeholder.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentasque et henderit orci Donec vehicula justo ut nulla aliquet, ac tincidunt m,etus trisnque.",
        title: "Contract #145"
    },
    {
        contract_type: "corporate",
        corporation: "Subsid. corp.",
        corporation_logo: "images/logo_placeholder.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentasque et henderit orci Donec vehicula justo ut nulla aliquet, ac tincidunt m,etus trisnque.",
        title: "Contract #146"
    },
    {
        contract_type: "corporate",
        corporation: "Subsid. corp.",
        corporation_logo: "images/logo_placeholder.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentasque et henderit orci Donec vehicula justo ut nulla aliquet, ac tincidunt m,etus trisnque.",
        title: "Contract #147"
    },
    {
        contract_type: "corporate",
        corporation: "Subsid. corp.",
        corporation_logo: "images/logo_placeholder.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentasque et henderit orci Donec vehicula justo ut nulla aliquet, ac tincidunt m,etus trisnque.",
        title: "Contract #148"
    },
    {
        contract_type: "corporate",
        corporation: "Subsid. corp.",
        corporation_logo: "images/logo_placeholder.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentasque et henderit orci Donec vehicula justo ut nulla aliquet, ac tincidunt m,etus trisnque.",
        title: "Contract #149"
    },
    {
        contract_type: "corporate",
        corporation: "Subsid. corp.",
        corporation_logo: "images/logo_placeholder.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentasque et henderit orci Donec vehicula justo ut nulla aliquet, ac tincidunt m,etus trisnque.",
        title: "Contract #150"
    },
    {
        contract_type: "corporate",
        corporation: "Subsid. corp.",
        corporation_logo: "images/logo_placeholder.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentasque et henderit orci Donec vehicula justo ut nulla aliquet, ac tincidunt m,etus trisnque.",
        title: "Contract #151"
    },
    {
        contract_type: "corporate",
        corporation: "Subsid. corp.",
        corporation_logo: "images/logo_placeholder.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentasque et henderit orci Donec vehicula justo ut nulla aliquet, ac tincidunt m,etus trisnque.",
        title: "Contract #152"
    },
];

const ResumeYourWork: FC = () => {

    return (
        <Container>
            <FilterList
                name="Resume your work"
                items={
                    data.map(item => ({ title: item.title, children: <ResumeWorkItem {...item} /> }))
                }


            />

        </Container>
    )
}


export default ResumeYourWork