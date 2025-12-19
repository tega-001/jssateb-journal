import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Layout from '../hoc/Layout';

const useStyles = makeStyles((theme) => ({
    grid: {
        padding: '13px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paper: {
        margin: '40px auto',
        padding: '10px',
    },
    heading: {
        fontSize: '10rem',
        height: '30vh',
        background: '-webkit-linear-gradient(90deg,#78100D,#ffffff59)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        [theme.breakpoints.down('xs')]: {
            height: '25vh',
        },
    },
    heading2: {
        fontSize: '2.35rem',
        fontWeight: 500,
    },
    btn: {
        margin: '15px 5px',
        padding: '10px 20px',
    },
}));

const NotFound = () => {
    const classes = useStyles();
    return (
        <Layout title="ERROR 404 | Page not Found">
            <Container maxWidth="lg">
                <Paper elevation={8} className={classes.paper}>
                    <Grid className={classes.grid} container spacing={3}>
                        <Grid item xs={12}>
                            <Typography className={classes.heading}>
                                404
                            </Typography>
                        </Grid>
                        <Grid item xs={12} align="center">
                            <Typography
                                align="center"
                                className={classes.heading2}
                            >
                                SORRY WE CANT FIND THIS PAGE!!
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                align="center"
                                color="textSecondary"
                            >
                                Either Something Went Wrong or the page does not
                                exists anymore.
                            </Typography>
                            <Link href="/">
                                <Button
                                    className={classes.btn}
                                    variant="contained"
                                    color="primary"
                                >
                                    Go to Home
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Layout>
    );
};

export default NotFound;
