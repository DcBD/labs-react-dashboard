import InputBase from '@material-ui/core/InputBase';
import { Icon } from 'components/common/misc';
import styled from 'styled-components';


const Container = styled.div`
    position:relative;
    width:100%;
    div{
        width:inherit;
        input[type='text']{
            position:relative;
            border:solid #e8e8e8 1px;
            border-radius: 5px;
            text-align:center;
            width:100%;
        } 
    }
`;

const IconContainer = styled.div`

`;


const SearchBar = () => {


    return (
        <Container>
            <InputBase
                placeholder="Search Legalcluster"
            />
        </Container>
    )
}


export default SearchBar;