import React, { FC } from "react";
import { IconsList } from "shared/Icons";
import { IconName } from "shared/Types";
import styled from "styled-components";



const Container = styled.div`

`;

interface IIconProps {
    icon: IconName
}


const Icon: FC<IIconProps> = React.memo(({ icon }: IIconProps) => {

    const IconComponent = IconsList[icon];

    return <Container>
        <IconComponent />
    </Container>
})

export default Icon;