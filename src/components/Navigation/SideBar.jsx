import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Typography,
} from '@material-ui/core';
import { alpha } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { navData } from './navigationElements';

//Satisfied with Styling Changes?

const useStyles = makeStyles((theme) => ({
    active: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.9),
        },
    },
    title: {
        padding: theme.spacing(2),
        color: theme.palette.common.white,
        fontWeight: '500',
    },
    icon: {
        padding: '5px',
        margin: '10px',
        color: theme.palette.common.white,
    },
    drawerPaper: {
        width: 250,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
}));

const SideBar = () => {
    const classes = useStyles();

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (toggle) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setIsOpen(toggle);
    };

    return (
        <>
            <IconButton
                edge="start"
                className={classes.icon}
                onClick={toggleDrawer(true)}
            >
                <MenuIcon fontSize="large" />
            </IconButton>

            <Drawer
                anchor="left"
                open={isOpen}
                onClose={toggleDrawer(false)}
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                        JSS Journal of Scientific Studies
                    </Typography>
                </div>

                <List>
                    {navData.map((navItem) => (
                        <ListItem
                            button
                            key={navItem.title}
                            onClick={() => {
                                router.push(navItem.link);
                                setIsOpen(false);
                            }}
                            className={
                                router.asPath === navItem.link
                                    ? classes.active
                                    : ''
                            }
                        >
                            <ListItemText primary={navItem.title} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};

export default SideBar;
