import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
    Typography,
    Stepper,
    Step,
    StepLabel,
    StepConnector,
} from '@material-ui/core';
import {
    CheckCircle,
    Cancel,
    Description,
    HourglassFull,
    FindInPage,
} from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
    },
    Stepper: {
        backgroundColor: '#fff',
    },
    buttonGroup: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: '40px 0px',
        padding: '10px 0px',
    },
}));

// Redefine and Resturcture the Code

const ConnectorColor = withStyles({
    active: {
        '& $line': {
            backgroundColor: '#78100D',
        },
    },
    completed: {
        '& $line': {
            backgroundColor: '#f1f1f1',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#78100D',
        borderRadius: 1,
    },
})(StepConnector);

const IconStyles = makeStyles({
    root: {
        backgroundColor: '#78100D',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundColor: '#78100D',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundColor: '#f1f1f1',
    },
});

const Icons = (props) => {
    const classes = IconStyles();
    const { active, completed } = props;

    const icons = {
        1: <Description />,
        2: <FindInPage />,
        3: <HourglassFull />,
        4: <Cancel />,
        5: <CheckCircle />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
};

const StepperBar = ({ status }) => {
    const classes = useStyles();

    let activeStep;
    switch (status) {
        case 'Submitted':
            activeStep = 0;
            break;
        case 'Review':
            activeStep = 1;
            break;
        case 'Pending':
            activeStep = 2;
            break;
        case 'Accepted':
            activeStep = 3;
            break;
        case 'Rejected':
            activeStep = 3;
            break;
    }

    return (
        <div className={classes.root}>
            <Stepper
                alternativeLabel
                className={classes.Stepper}
                activeStep={activeStep}
                connector={<ConnectorColor />}
            >
                <Step>
                    <StepLabel StepIconComponent={Icons}>
                        <Typography>Submitted</Typography>
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={Icons}>
                        <Typography>Under Review</Typography>
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={Icons}>
                        <Typography>Pending</Typography>
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel StepIconComponent={Icons}>
                        <Typography>Decision</Typography>
                    </StepLabel>
                </Step>
            </Stepper>
        </div>
    );
};

export default StepperBar;
