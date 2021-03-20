import { AppBar, Toolbar } from '@material-ui/core';
import Logo from 'components/common/trademark/Logo';

import NavigationMenu from 'components/common/navigation/NavigationMenu';



const TopNav = () => {


    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Logo size="default" />

                <NavigationMenu />

                SERCZ BAR


                HOME BTN

                COMMENTS

                NOTIFICATIONS
            </Toolbar>
        </AppBar>
    )
}

export default TopNav;