import { Card } from "@material-ui/core";
import { Icon } from "components/common/misc";
import { FC } from "react";
import styled from "styled-components";
import { Spacing } from "styledHelpers/Spacing";
import { TextPrimary, TextPrimaryDark, TextSecondary } from "styledHelpers/components/Text";
import SelectBox from "components/pages/entities/components/GridList/SelectBox";
import { IDropDownMenuItemObject } from "components/common/menu/components/DropdownMenuItems";
import TextInput from "components/common/misc/TextInput";
import Spacer from "components/common/misc/Spacer";
import { Colors } from "styledHelpers/Colors";
import useDropdown from "react-dropdown-hook";

const Container = styled(Card)`
    position: absolute;

    padding: ${Spacing[3]}rem;
    z-index: 10;
    overflow:visible !important;
`;

const Section = styled.div`
    display: flex;
    width:100%;
    align-items:center;
    margin:  ${Spacing[2]}rem ${Spacing[2]}rem;
`;

const Title = styled(Section)`
    margin:  0;
    
`

const RemoveIcon = styled.div`
   margin-right: ${Spacing[2]}rem;

    svg {
        fill: ${Colors.darkBlueText};
    }

`;

const ArrowDownIcon = styled.div`
    position:relative;
    top: 2px;
    margin-left: ${Spacing[1]}rem;
`;

const Text = styled(TextPrimaryDark)`
    display:flex;
    align-items:center;
`

const Separator = styled.div`
    width:50px;
`

const Close = styled.div`
    position:absolute;
    right:5px;
    top: 5px;

`;

interface Props {
    close: () => void
}

const Filters: FC<Props> = ({ close }) => {





    return (
        <Container>
            <Close>
                <Spacer />
                <Icon icon="times" size="12" onClick={() => { close() }} />
            </Close>

            <Title>
                <TextSecondary>
                    Rows are filtered by the following conditions starting from the top.

                </TextSecondary>
            </Title>
            <Section>
                <RemoveIcon>
                    <Icon icon="times" size="12" />
                </RemoveIcon>
                <Text>Where</Text>
                <Separator />
                <Text>Company</Text> <ArrowDownIcon> <Icon icon="arrow-down" size="10" /> </ArrowDownIcon>
                <Separator />
                <Text>Contains</Text> <ArrowDownIcon><Icon icon="arrow-down" size="10" /> </ArrowDownIcon>
                <Separator />
                <TextInput disabled placeholder="Value..." />
            </Section>

            <Section>
                <RemoveIcon>
                    <Icon icon="times" size="12" />
                </RemoveIcon>
                <Text>Where</Text>
                <Separator />
                <Text>Status</Text> <ArrowDownIcon> <Icon icon="arrow-down" size="10" /> </ArrowDownIcon>
                <Separator />
                <Text>Is</Text> <ArrowDownIcon><Icon icon="arrow-down" size="10" /> </ArrowDownIcon>
                <Separator />
                <TextInput disabled placeholder="Value..." />
                <Separator />
                <Text>In</Text> <ArrowDownIcon><Icon icon="arrow-down" size="10" /> </ArrowDownIcon>
                <Separator />
                <TextInput disabled placeholder="Entity..." />
            </Section>


            <Section>
                <RemoveIcon>
                    <Icon icon="times" size="12" />
                </RemoveIcon>
                <Text>And</Text>
                <Separator />
                <Text>Status</Text> <ArrowDownIcon> <Icon icon="arrow-down" size="10" /> </ArrowDownIcon>
                <Separator />
                <Text>Ends before</Text> <ArrowDownIcon><Icon icon="arrow-down" size="10" /> </ArrowDownIcon>
                <Separator />
                <TextInput disabled placeholder="Date" />
                <Separator />
                <Text>In</Text> <ArrowDownIcon><Icon icon="arrow-down" size="10" /> </ArrowDownIcon>
                <Separator />
                <TextInput disabled placeholder="Entity..." />
            </Section>

            <Section>
                <Icon icon="plus" size="12" /> <TextPrimary>Add filter</TextPrimary>
                <Separator />

                <TextPrimary>choose property</TextPrimary> <ArrowDownIcon><Icon icon="arrow-down" size="10" /> </ArrowDownIcon>
            </Section>

        </Container>
    )

}


export default Filters