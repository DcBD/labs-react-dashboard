
import { Card, Paper } from "@material-ui/core";
import Image from "components/common/misc/Image";
import Spacer from "components/common/misc/Spacer";
import { FC, useState } from "react";
import styled from "styled-components";
import { TextPrimary, TextSecondary } from "styledHelpers/components/Text";
import { Spacing } from "styledHelpers/Spacing";

const Container = styled(Card)`
    margin: ${Spacing[2]}rem;
    display: flex;
    height:85px;
    width:300px;
    padding: ${Spacing[2]}rem;
    align-items: center;
`;


const ImageContainer = styled.div`
    width: 85px;
    height:85px;
    flex-grow: 0;

    *{
        border-radius: 3%;
    }
`;

const TextContainer = styled.div`
    text-transform: capitalize;
    padding: ${Spacing[2]}rem;
    margin-top: ${Spacing[1]}rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 170px;
`


interface Props {

    title: string,
    description: string,
    image: string,
    following: boolean

}

const GridItem: FC<Props> = ({ title, description, image, following }) => {


    return (
        <Container>
            <ImageContainer>
                <Image src={image} alt={title} />
            </ImageContainer>
            <TextContainer>
                <div>
                    <TextPrimary fontSize="18" fontWeight="bold">
                        {title.slice(0, 17)}
                    </TextPrimary>
                </div>
                <Spacer />
                <div>
                    <TextSecondary>
                        {description}
                    </TextSecondary>
                </div>
                <Spacer />

            </TextContainer>

        </Container>
    )
}

export default GridItem