import { Card, CardContent } from "@material-ui/core";
import { Icon } from "components/common/misc";
import Image from "components/common/misc/Image";
import Spacer from "components/common/misc/Spacer";
import { FC } from "react-transition-group/node_modules/@types/react";
import styled from "styled-components";
import { Text, TextPrimary, TextPrimaryDark, TextSecondary } from "styledHelpers/components/Text";
import { Spacing } from "styledHelpers/Spacing";


const Container = styled(Card)``;

const ImageContainer = styled.div`
    width:100%;
    height:125px;
`;

const IconContainer = styled(Card)`

    position:relative;
    width:100px;
    height:100px;
    display:flex;
    align-items:center;
    justify-content: center;
    top: -40px;

`;

const Content = styled.div`
   padding: ${Spacing[2]}rem;
`;

const HeaderContainer = styled.div`
    display:flex;
    height:75px;
`;

const ContentFooter = styled.div`
    margin-top: ${Spacing[2]}rem;
`;

const FooterActions = styled.div`
    display:flex;
`;

const FooterTimeStamp = styled.div`
    margin-top: ${Spacing[2]}rem;
`;

const FooterAction = styled.div`
    display:flex;
`;

const DotSpacer = styled.div`
    width:50px;
    text-align:center;
`;

const WorkspaceItem: FC = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src="images/building.jpg" alt="slider item" gradient={undefined} />
            </ImageContainer>
            <Content>
                <HeaderContainer>
                    <IconContainer>
                        <Icon icon="paper-pen" size="22" />
                    </IconContainer>
                    <TextPrimaryDark fontSize="24" fontWeight="600" marginLeft="20px">Client contract</TextPrimaryDark>
                </HeaderContainer>
                <ContentFooter>
                    <FooterActions>
                        <FooterAction>
                            <Icon icon="paper-pen" />
                            <TextSecondary fontSize="18">Contract</TextSecondary>
                        </FooterAction>

                        <DotSpacer>
                            •
                        </DotSpacer>

                        <FooterAction>
                            <Icon icon="people" />
                            <TextSecondary fontSize="18">{Math.floor((Math.random() * 100))} users</TextSecondary>
                        </FooterAction>
                        <Spacer />
                    </FooterActions>

                    <FooterTimeStamp>
                        <TextSecondary>Last update {Math.floor((Math.random() * 100) * 0.75)} days ago.</TextSecondary>
                    </FooterTimeStamp>
                </ContentFooter>
            </Content>
        </Container>
    )
}


export default WorkspaceItem;