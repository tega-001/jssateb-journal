import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NotificationImportant } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
    NotificationBox: {
        backgroundColor: 'whitesmoke',
        padding: '10px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
    },
    NotificationIcon: {
        margin: '10px',
    },
});

const NotificationCard = ({ children }) => {
    const classes = useStyles();

    return (
        <Box className={classes.NotificationBox}>
            <NotificationImportant className={classes.NotificationIcon} />
            {children}
        </Box>
    );
};

export default NotificationCard;
