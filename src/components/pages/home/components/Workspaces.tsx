import { CardActions, Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Slider from "components/common/slider/Slider";
import WorkspaceItem from "components/pages/home/components/WorkspaceItem";
import { FC } from "react";
import styled from "styled-components";
import { borderRounded } from "styledHelpers/components/Borders";
import { TextPrimary, TextPrimaryDark } from "styledHelpers/components/Text";
import { FontSizes } from "styledHelpers/Sizes";
import { Spacing } from "styledHelpers/Spacing";




const Container = styled.div`
    position: relative;
    display: block;
    text-align:left;
    height:450px;

`

const SliderItem = styled.div`
    margin:0 ${Spacing[2]}rem;

`;

const Title = styled.div`
    margin: ${Spacing[4]}rem;

`;

const Workspaces: FC = () => (
    <Container>
        <Title>
            <TextPrimaryDark fontSize="22" fontWeight="600">Workspaces</TextPrimaryDark>
        </Title>
        <Slider minItemsVisible={5} width={370}>
            <SliderItem><WorkspaceItem title="Client contract" name="Contract" icon="paper-pen" /></SliderItem>
            <SliderItem><WorkspaceItem title="Supplier contract" name="Contract" icon="paper-pen" /></SliderItem>
            <SliderItem><WorkspaceItem title="Corporate" name="Corporate" icon="entities" /></SliderItem>
            <SliderItem><WorkspaceItem title="Group norms" name="Norms" icon="book" /></SliderItem>
            <SliderItem><WorkspaceItem title="Lorem ipsum" name="Lorem" icon="network" /></SliderItem>
            <SliderItem><WorkspaceItem title="Dolor" name="Dolor" icon="privacy" /></SliderItem>
        </Slider>
    </Container>
)


export default Workspaces;