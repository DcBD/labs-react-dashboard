import React from 'react';

import { ReactComponent as LogoIcon } from 'icons/logo.svg'


import styled from 'styled-components';
import { Size } from 'shared/Types';
import { IconSize } from 'styledHelpers/Sizes';

interface ILogoProps {
    size?: Size
}




const Container = styled.div<{ size: Size }>`
    width: ${(props) => IconSize[props.size]};
    height: ${(props) => IconSize[props.size]};
`;

const Logo = React.memo(({
    size = "16"
}: ILogoProps) => {

    return <Container size={size}>
        <LogoIcon />
    </Container>

})




export default Logo