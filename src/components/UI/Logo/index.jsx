import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
    journal: {
        maxWidth: '60px',
        height: 'auto',
        backgroundColor: 'white',
        padding: '5px 7px',
        margin: '3px',
        borderRadius: '5px',
    },
    college: {
        maxWidth: '75px',
        height: 'auto',
        backgroundColor: 'white',
        padding: '5px',
        borderRadius: '5px',
    },
}));

export const JournalLogo = () => {
    const classes = useStyles();
    return (
        <div>
            <img
                className={classes.journal}
                src="/assets/images/journal-logo.png"
                alt="Journal Logo"
            />
        </div>
    );
};

export const CollegeLogo = () => {
    const classes = useStyles();
    return (
        <div>
            <img
                className={classes.college}
                src="/assets/images/college-logo.png"
                alt="College Logo"
            />
        </div>
    );
};
