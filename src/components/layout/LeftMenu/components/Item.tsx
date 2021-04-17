import { Icon } from "components/common/misc";
import { ButtonDarkOutlined } from "components/common/misc/Button";
import React, { FC } from "react";
import { IconName } from "shared/Types";
import styled from "styled-components";
import { FontSizes } from "styledHelpers/Sizes";
import { Spacing } from "styledHelpers/Spacing";


interface IITem {
    icon: IconName,
    onClick?: () => void,

    withButton?: boolean,
    buttonIcon?: IconName,
    onButtonClick?: () => void,
}




const Container = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;

    justify-content: space-between;
    margin: ${Spacing[3]}rem 0;

`;

const Content = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;

`;

const ContentItem = styled.div`
    margin: 0 ${Spacing[2]}rem;
    font-size: ${FontSizes[18]};
`;

const Item: FC<IITem> = ({ children, icon, withButton = false, buttonIcon, onButtonClick, onClick }) => {

    return (
        <Container>
            <Content onClick={onClick}>
                <ContentItem>
                    <Icon icon={icon} />

                </ContentItem>

                <ContentItem>
                    {children}
                </ContentItem>

            </Content>

            {withButton && buttonIcon &&
                <ButtonDarkOutlined>
                    <Icon icon={buttonIcon} size="20" />
                </ButtonDarkOutlined>
            }
        </Container>
    )

}

export default Item;