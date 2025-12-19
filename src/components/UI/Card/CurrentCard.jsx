import { Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '25vh',
        margin: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderLeft: '7px solid #78100D',
        '&:hover': {
            transition: 'all 0.2s ease-out',
            boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.5)',
        },
        [theme.breakpoints.down('md')]: {
            height: '28vh',
            borderLeft: '5px solid #78100D',
        },
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
    button: {
        margin: '15px',
        [theme.breakpoints.down('md')]: {
            margin: '10px',
            fontSize: '0.7rem',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '8px',
            fontSize: '0.5rem',
        },
    },
}));

const openLink = (url) => window.open(url, '_blank');

const CurrentCard = ({ item, style }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} style={style} elevation={2}>
            <CardContent>
                <Typography color="textSecondary">Article</Typography>
                <Typography variant="h5" gutterBottom className={classes.title}>
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
                <Typography
                    color="textSecondary"
                    className={classes.body}
                    gutterBottom
                >
                    Published Date: {item.publishedDate}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    color="primary"
                    variant="contained"
                    className={classes.button}
                    onClick={() => openLink(item.link)}
                >
                    DOWNLOAD PDF
                </Button>
            </CardActions>
        </Card>
    );
};

export default CurrentCard;
