import { AppBar, TextField, Toolbar } from '@material-ui/core';
import Logo from 'components/common/trademark/Logo';

import NavigationMenu from 'components/common/navigation/NavigationMenu';
import SearchBar from 'components/layout/TopNav/components/SearchBar';





const TopNav = () => {


    return (

        <AppBar position="static" color="inherit">
            <Toolbar>
                <Logo />

                <NavigationMenu />

                <SearchBar />


                HOME BTN

                COMMENTS

                NOTIFICATIONS
            </Toolbar>
        </AppBar>


    )
}

export default TopNav;