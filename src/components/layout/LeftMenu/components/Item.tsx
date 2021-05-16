import { Icon } from "components/common/misc";
import { ButtonDarkOutlined } from "components/common/misc/Button";
import React, { FC } from "react";
import { IconName } from "shared/Types";
import styled from "styled-components";
import { grayBackgroundHover } from "styledHelpers/components/Effects";
import { FontSizes } from "styledHelpers/Sizes";
import { Spacing } from "styledHelpers/Spacing";


interface IITem {
    icon: IconName,
    onClick?: () => void,

    withButton?: boolean,
    buttonIcon?: IconName,
    onButtonClick?: () => void,
}




const Container = styled.div<{ $withHover: boolean }>`
    display: flex;
    flex-direction:row;
    align-items: center;

    justify-content: space-between;
    margin: ${Spacing[3]}rem 0;
    padding: ${Spacing[2]}rem;

    ${({ $withHover }) => $withHover && grayBackgroundHover()};

`;

const Content = styled.div`
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
`;

const ContentItem = styled.div`
    margin: 0 ${Spacing[2]}rem;
    font-size: ${FontSizes[16]};
`;

const Item: FC<IITem> = ({ children, icon, withButton = false, buttonIcon, onButtonClick, onClick }) => {

    return (
        <Container $withHover={onClick !== undefined && !withButton} onClick={withButton ? undefined : onClick}>
            <Content>
                <ContentItem>
                    <Icon icon={icon} />

                </ContentItem>

                <ContentItem>
                    {children}
                </ContentItem>

            </Content>

            {withButton && buttonIcon &&
                <ButtonDarkOutlined onClick={onClick}>
                    <Icon icon={buttonIcon} size="20" />
                </ButtonDarkOutlined>
            }
        </Container>
    )

}

export default Item;