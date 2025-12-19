import {
    Card,
    CardContent,
    CardActions,
    Collapse,
    Box,
    Button,
} from '@material-ui/core';
// import {
//     CheckCircle,
//     Cancel,
//     Description,
//     HourglassFull,
//     FindInPage,
// } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StepperBar from '../Stepper/StepperBar';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '15px 0px',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        [theme.breakpoints.down('md')]: {
            fontSize: '1.2rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.1rem',
        },
    },
    body: {
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.9rem',
        },
    },
    statusContent: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '15px',
        [theme.breakpoints.down('xs')]: {
            margin: '0px',
            padding: '5px',
        },
    },
}));

const StatusCard = ({ item }) => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const expansionHandler = () => {
        setExpanded((prevState) => !prevState);
    };

    let cardStyle;
    switch (item.status) {
        case 'Submitted':
            cardStyle = { borderLeft: '7px solid #1F2937' };
            break;
        case 'Review':
            cardStyle = { borderLeft: '7px solid #2563EB' };
            break;
        case 'Pending':
            cardStyle = { borderLeft: '7px solid #D97706' };
            break;
        case 'Accepted':
            cardStyle = { borderLeft: '7px solid #059669' };
            break;
        case 'Rejected':
            cardStyle = { borderLeft: '7px solid #DC2626' };
            break;
    }

    return (
        <Card className={classes.root} style={cardStyle}>
            <Box display="flex" justifyContent="space-between">
                <CardContent>
                    <Typography color="textSecondary">Article</Typography>
                    <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.title}
                    >
                        {item.title}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        className={classes.body}
                        gutterBottom
                    >
                        {item.authors.join(' & ')}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        className={classes.body}
                        gutterBottom
                    >
                        Pages: {item.startPage}-{item.endPage}
                    </Typography>
                    <Typography color="textSecondary" className={classes.body}>
                        Published Date: {item.publishedDate}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Button onClick={expansionHandler}>Check Status</Button>
                </CardActions>
            </Box>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <StepperBar status={item.status} />
            </Collapse>
        </Card>
    );
};

export default StatusCard;
