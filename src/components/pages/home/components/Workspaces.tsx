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
        <Slider minItemsVisible={5} width={400}>
            <SliderItem><WorkspaceItem /></SliderItem>
            <SliderItem><WorkspaceItem /></SliderItem>
            <SliderItem><WorkspaceItem /></SliderItem>
            <SliderItem><WorkspaceItem /></SliderItem>
            <SliderItem><WorkspaceItem /></SliderItem>
            <SliderItem><WorkspaceItem /></SliderItem>
            <SliderItem><WorkspaceItem /></SliderItem>
            <SliderItem><WorkspaceItem /></SliderItem>
        </Slider>
    </Container>
)

const Placeholder = () => {
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {Math.random()}
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>)
}

export default Workspaces;