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
import useHeader from 'features/application/hooks/useHeader';
import { connect } from 'react-redux';



const Container = styled.div<{ $hidden: boolean }>`
    position:relative;
    ${({ $hidden }) => $hidden ? "display:none;" : "display:flex;"}
    align-items:center;
    padding: 0 ${Spacing[3]}rem;
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
    const [visible] = useHeader();
    const [hidden, setIsHidden] = useState(!visible);

    useEffect(() => {
        setIsHidden(!visible);
    }, [visible])

    return (

        <AppBar position="static" color="inherit">
            <Container $hidden={hidden}>
                <LeftSection>
                    <LogoContainer>
                        <Logo size="auto" />
                    </LogoContainer>

                    <NavigationMenu selected={selectedItem?.value as string} />
                </LeftSection>

                <CenterSection>
                    <SearchBarContainer>
                        <SearchBar />
                    </SearchBarContainer>
                </CenterSection>


                <RightSection>
                    <Icon icon="house" onClick={() => routing.redirect("/")} />

                    <Icon icon="comments" filled badgeContent="3" onClick={() => routing.redirect("comments")} />

                    <Icon icon="bell" filled badgeContent="3" onClick={() => routing.redirect("notifications")} />

                </RightSection>

            </Container>
        </AppBar>


    )
}

export default (connect(state => state, {}))(TopNav)

