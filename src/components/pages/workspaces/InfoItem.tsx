import { Icon } from "components/common/misc";
import { FC, ReactElement } from "react";
import { IconName } from "shared/Types";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";
import { Spacing } from "styledHelpers/Spacing";



const Container = styled.div`
    width: 29%;
    height: 200px;
    background-color: ${Colors.white};
    padding:${Spacing[3]}rem;
    margin: ${Spacing[3]}rem !important;
`;

const IconHeader = styled.div`
    path {
        color: ${Colors.blueGradient};
    }
`

const TitleContent = styled.div`
    text-align:left;
    margin-top: ${Spacing[2]}rem;

`;

const Description = styled.div`
    text-align:left;
    margin-top: ${Spacing[4]}rem;

`;

interface Props {
    icon: IconName,
    Title: () => ReactElement
    description: string
}

const InfoItem: FC<Props> = ({ Title, description, icon }) => {
    return <Container>
        <IconHeader><Icon icon={icon} size="22" /></IconHeader>
        <TitleContent><Title /></TitleContent>
        <Description>{description}</Description>
    </Container>
}

export default InfoItem