import { Icon } from 'components/common/misc';
import React from 'react';
import { Size } from 'shared/Types';
import styled from 'styled-components';
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
        <Icon icon="logo" />
    </Container>

})




export default Logo