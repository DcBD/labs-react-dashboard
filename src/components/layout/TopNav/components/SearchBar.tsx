import InputBase from '@material-ui/core/InputBase';

import styled from 'styled-components';


const Container = styled.div`
    margin-left:2rem;
    width:100%;
    position:relative;
    display:flex;

    div{
        width:60%;
        input[type='text']{
            position:relative;
            border:solid #e8e8e8 1px;
            border-radius: 5px;
            text-align:center;
            width:100%;
        } 
    }
`;

const Icon = styled.div`

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