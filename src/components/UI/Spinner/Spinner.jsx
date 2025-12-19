import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        justifyContent: 'center',
        padding: '10px',
    },
}));

const Spinner = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress size={80} style={{ color: '#78100D' }} />
        </div>
    );
};

export default Spinner;
