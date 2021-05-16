import { AppBar } from '@material-ui/core';
import NavigationMenu from 'components/common/navigation/NavigationMenu';
import Logo from 'components/common/trademark/Logo';
import SearchBar from 'components/layout/TopNav/components/SearchBar';
import styled from 'styled-components';
import { Spacing } from 'styledHelpers/Spacing';
import Icon from 'components/common/misc/Icon';
import useRouting from 'services/hooks/useRouting';
import { useEffect, useState } from 'react';
import { getItemByRoute } from 'components/common/navigation/NavigationMenuItems';



const Container = styled.div`
    position:relative;
    display:flex;
    align-items:center;
    padding: ${Spacing[1]}rem ${Spacing[3]}rem;
`;

const LogoContainer = styled.div`
    margin-right: ${Spacing[7]}px;
`

const SearchBarContainer = styled.div`
    width:80%;
    display:flex;
    align-items:center;
`;

const LeftSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: space-between;
`;

const CenterSection = styled.div`
    display: flex;
    align-items: center;
    justify-content:center;
    flex:1;
`;

const RightSection = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;

    div{
        margin: 0 ${Spacing[3]}rem;
    }
`;

const TopNav = () => {

    const routing = useRouting();

    const [selectedItem] = useState(getItemByRoute(routing.route));

    return (

        <AppBar position="static" color="inherit">
            <Container>
                <LeftSection>
                    <LogoContainer>
                        <Logo />
                    </LogoContainer>

                    <NavigationMenu selected={selectedItem?.value} />
                </LeftSection>

                <CenterSection>
                    <SearchBarContainer>
                        <SearchBar />
                    </SearchBarContainer>
                </CenterSection>


                <RightSection>
                    <Icon icon="house" />

                    <Icon icon="comments" filled badgeContent="3" />

                    <Icon icon="bell" filled badgeContent="3" />

                </RightSection>

            </Container>
        </AppBar>


    )
}

export default TopNav;