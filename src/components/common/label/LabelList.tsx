import Label from "components/common/label/Label";
import { Icon } from "components/common/misc";
import TextInput from "components/common/misc/TextInput";
import { FC, useState } from "react";

import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";
import { TextSecondary } from "styledHelpers/components/Text";
import { Spacing } from "styledHelpers/Spacing";
import { v4 as uuidv4 } from 'uuid';

const Container = styled.div`
    text-align: left;

    flex-wrap:wrap;


`;

const Labels = styled.div`
    position: relative;

    flex-wrap:wrap;

    display: flex;


    > div {
        margin: ${Spacing[2]}rem;
    }
`;

const AddLabelButton = styled.div`
    display: flex;
    align-items:center;
`;

const RemoveLabelButton = styled.div`
    margin-left: ${Spacing[1]}rem;
    position: absolute;
    right:5px;
    
    svg {
        fill: ${Colors.redText}
    }
`;

const LabelsContainer = styled.div`
    display: flex;
`;

const Editable = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width:160px;
`;



interface Props {
    title: string,
    labels: ILabel[]
    editable?: boolean,
    onChange?: (labels: ILabel[]) => void
}

interface ILabel {
    label: string,
    editable?: boolean
    id: string
}

const LabelList: FC<Props> = ({
    title,
    labels,

    editable = false,
    onChange = (labels: ILabel[]) => { }
},) => {

    const updateLabel = (value: string, id: string) => {

        onChange(labels.map((label) => {

            if (label.id === id) {
                return { ...label, label: value, editable: true, };
            }

            return label;
        }))
    }

    const handleAddEditable = () => {
        // labels.push({ id: uuidv4(), label: "", editable: true });
        const _labels = [...labels];
        _labels.push({ id: uuidv4(), label: "", editable: true });
        onChange(_labels);
    }

    const handleRemoveItem = (id: string) => {
        onChange(labels.filter(item => item.id != id));
    }

    const handleRemoveEditable = (id: string) => {
        onChange(labels.filter((label) => id != label.id));
    }



    return (
        <Container>
            <TextSecondary marginBottom="10px">{title}</TextSecondary>
            <LabelsContainer>

                <Labels>
                    {
                        labels.filter(label => !label.editable).map((label, i) => <Label key={label.id} value={label.label} isRemovable={editable} handleRemove={() => handleRemoveItem(label.id)} />)
                    }
                    {editable && labels.filter(label => label.editable).map((label, index) =>
                        <Editable key={label.id}>
                            <TextInput value={label.label} onChange={(e) => updateLabel(e.target.value, label.id)} />
                            <RemoveLabelButton>
                                <Icon icon="times" size="10" onClick={() => handleRemoveEditable(label.id)} />
                            </RemoveLabelButton>
                        </Editable>
                    )}
                    {editable && <AddLabelButton>
                        <Icon icon="plus" size="12" onClick={handleAddEditable} />
                    </AddLabelButton>}
                </Labels>



            </LabelsContainer>
        </Container>
    )

}

export default LabelList