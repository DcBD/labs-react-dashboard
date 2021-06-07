import Label from "components/common/label/Label";
import { FC } from "react-transition-group/node_modules/@types/react";
import styled from "styled-components";
import { TextSecondary } from "styledHelpers/components/Text";


const Container = styled.div`
    text-align: left;
`;

const Labels = styled.div`
    display: flex;
`;

interface Props {
    title: string,
    labels: Array<string>
}

const LabelList: FC<Props> = ({ title, labels }) => {

    return (
        <Container>
            <TextSecondary marginBottom="10px">{title}</TextSecondary>
            <Labels>
                {
                    labels.map((label, i) => <Label key={i} value={label} />)
                }
            </Labels>
        </Container>
    )

}

export default LabelList