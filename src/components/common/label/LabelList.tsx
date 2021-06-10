import Label from "components/common/label/Label";
import { Icon } from "components/common/misc";
import { FC, useState } from "react";

import styled from "styled-components";
import { TextSecondary } from "styledHelpers/components/Text";


const Container = styled.div`
    text-align: left;
    width: max-content;
`;

const Labels = styled.div`
    display: flex;
`;

const AddLabelButton = styled.div`
    display: flex;
    align-items:center;
`;

const LabelsContainer = styled.div`
    display: flex;
`;


interface Props {
    title: string,
    labels: Array<string>
    onItemRemove?: (label: string) => void,
    editable?: boolean
}

const LabelList: FC<Props> = ({ title, labels, onItemRemove = () => { }, editable = false }) => {

    const [items, setItems] = useState(labels);

    const handleRemoveItem = (label: string) => {
        setItems(items.filter(item => item != label));

        onItemRemove(label);
    }

    const handleAddItem = () => {

    }

    return (
        <Container>
            <TextSecondary marginBottom="10px">{title}</TextSecondary>
            <LabelsContainer>

                <Labels>
                    {
                        items.map((label, i) => <Label key={i} value={label} isRemovable={editable} handleRemove={() => handleRemoveItem(label)} />)
                    }
                </Labels>
                {editable && <AddLabelButton>
                    <Icon icon="plus" size="12" onClick={handleAddItem} />
                </AddLabelButton>}
            </LabelsContainer>
        </Container>
    )

}

export default LabelList