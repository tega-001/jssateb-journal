import { AppBar, Hidden, Toolbar } from '@material-ui/core';
import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import SideBar from './SideBar';

const NavBar = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <Hidden smDown>
                    <NavigationItems />
                </Hidden>
                <Hidden mdUp>
                    <SideBar />
                </Hidden>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
