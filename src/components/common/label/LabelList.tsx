import Label from "components/common/label/Label";
import { FC } from "react-transition-group/node_modules/@types/react";
import styled from "styled-components";
import { TextSecondary } from "styledHelpers/components/Text";


const Container = styled.div``;

const Labels = styled.div``;

interface Props {
    title: string,
    labels: Array<string>
}

const LabelList: FC<Props> = ({ title, labels }) => {

    return (
        <Container>
            <TextSecondary>{title}</TextSecondary>
            <Labels>
                {
                    labels.map((label) => <Label value={label} />)
                }
            </Labels>
        </Container>
    )

}

export default LabelList