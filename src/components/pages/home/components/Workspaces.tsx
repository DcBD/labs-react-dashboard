import { CardActions, Typography } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Slider from "components/common/slider/Slider";
import { FC } from "react";
import styled from "styled-components";
import { borderRounded } from "styledHelpers/components/Borders";
import { TextPrimary } from "styledHelpers/components/Text";




const Container = styled.div`
    position: relative;
    display: block;
    text-align:left;

`

const SliderItem = styled.div`

`;


const Workspaces: FC = () => {

    return (
        <Container>
            <TextPrimary>Workspaces</TextPrimary>
            <Slider
                items={[
                    <SliderItem><Placeholder /></SliderItem>,
                    <SliderItem><Placeholder /></SliderItem>,
                    <SliderItem><Placeholder /></SliderItem>,
                    <SliderItem><Placeholder /></SliderItem>,
                    <SliderItem><Placeholder /></SliderItem>,
                    <SliderItem><Placeholder /></SliderItem>,
                    <SliderItem><Placeholder /></SliderItem>,
                    <SliderItem><Placeholder /></SliderItem>
                ]}
                minItemsVisible={4}
            >
                {(a) =>
                    <>
                        {a}
                    </>
                }
            </Slider>
        </Container>
    )

}

const Placeholder = () => {
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
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