

import InputBase, { InputBaseProps } from '@material-ui/core/InputBase';
import { Icon } from 'components/common/misc';
import { FC } from 'react-transition-group/node_modules/@types/react';
import styled from 'styled-components';
import { Spacing } from 'styledHelpers/Spacing';


const Container = styled.div`
    position:relative;
    display: flex;
    align-items:center;
    div{
        width:inherit;
        input[type='text']{
            position:relative;
            border:solid #e8e8e8 1px;
            border-radius: 5px;
            padding: ${Spacing[2]}rem;
            width:100%;
        } 
    }
`;

const IconContainer = styled.div`

`;


const TextInput: FC<InputBaseProps> = (props) => {


    return (
        <Container>
            <InputBase
                {...props}
            />
        </Container>
    )
}


export default TextInput;