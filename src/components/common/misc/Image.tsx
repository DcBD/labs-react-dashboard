import { FC } from "react";
import { BackgroundSize } from "shared/Types";
import styled from "styled-components";
import { Colors } from "styledHelpers/Colors";


const Container = styled.div<{ src: string, gradient?: string, backgroundSize: BackgroundSize }>`
    position: relative;
    background-image:${({ gradient }) => gradient && gradient !== undefined && `${gradient},`} ${({ src }) => `url(${src})`};
    width:100%;
    height:100%;
    background-repeat:no-repeat;
    background-size: ${({ backgroundSize }) => `${backgroundSize}`};
`;

interface ImageProps {
    src: string,
    alt: string,
    gradient?: string
    backgroundSize?: BackgroundSize
}

const Image: FC<ImageProps> = ({ children, src, alt, gradient, backgroundSize = "cover" }) => {


    return (
        <Container src={src} gradient={gradient} backgroundSize={backgroundSize}>
            {children}
        </Container>
    )
}

export default Image;