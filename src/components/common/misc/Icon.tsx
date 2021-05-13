import React, { FC } from "react";
import { IconsList } from "shared/Icons";
import { Styles } from "shared/Interfaces";
import { IconName, Size } from "shared/Types";
import styled from "styled-components";
import { badge, fillGray, rounded } from "styledHelpers/components/Effects";
import { FontSizes, IconSize } from "styledHelpers/Sizes";
import { Spacing } from "styledHelpers/Spacing";



const iconBadgeEffect = (badgeContent: string | number): Styles => {
    return {
        "&:after": {
            position: "absolute",
            fontSize: FontSizes["12"],
            top: -5,
            right: -7,
            ...badge(badgeContent)
        }
    }
}

const Container = styled.div<{ filled: boolean, $size: Size, badgeContent?: string | number }>`

    display:flex;
    position:relative;
    ${rounded()}

    align-items: center;
    align-content: center;
    justify-content:center;

    ${({ filled }) => filled && fillGray()}
    
    ${({ filled }) => filled && {
        padding: Spacing[6]
    }}

    width: ${(props) => IconSize[props.$size]};
    height: ${(props) => IconSize[props.$size]};

    svg{
        width: ${(props) => IconSize[props.$size]};
        height: ${(props) => IconSize[props.$size]};
    }

    ${({ badgeContent }) => badgeContent && iconBadgeEffect(badgeContent)}
`;




interface IIconProps {
    icon: IconName
    filled?: boolean
    size?: Size
    badgeContent?: string | number
}


const Icon: FC<IIconProps> = React.memo(({ icon, filled = false, size = "16", badgeContent }: IIconProps) => {

    const IconComponent = IconsList[icon];

    return <Container filled={filled} $size={size} badgeContent={badgeContent}>
        <IconComponent />

    </Container>
})

export default Icon;