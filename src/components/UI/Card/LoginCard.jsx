import {
    Avatar,
    Box,
    Button,
    Grid,
    Link,
    Paper,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, AssignmentInd } from '@material-ui/icons';
import React, { useState } from 'react';
import Input from '../Input/Input';

const useStyles = makeStyles((theme) => ({
    grid: {
        height: '55vh',
        position: 'relative',
        maxWidth: '100%',
        minHeight: '400px',
        margin: '25px 0px',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
    },
    adminContainer: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '50%',
        height: '100%',
        padding: '10px',
        zIndex: '2',
        transition: 'all 0.6s ease-in-out',
    },
    userContainer: {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '50%',
        height: '100%',
        padding: '10px',
        opacity: '0',
        zIndex: '1',
        transition: 'all 0.6s ease-in-out',
    },
    rightPanelAdminSwipe: {
        transform: 'translateX(100%)',
    },
    rightPanelUserSwipe: {
        transform: 'translateX(100%)',
        opacity: '1',
        zIndex: '5',
        animation: '$show 0.6s',
    },
    overlayContainer: {
        position: 'absolute',
        top: '0',
        left: '50%',
        width: '50%',
        height: '100%',
        overflow: 'hidden',
        transition: 'transform 0.6s ease-in-out',
        zIndex: '100',
    },
    overlay: {
        background: theme.palette.primary.main,
        color: '#ffffff',
        position: 'relative',
        left: '-100%',
        height: '100%',
        width: '200%',
        transform: 'translateX(0)',
        transition: 'transform 0.6s ease-in-out',
    },
    rightPanelOverlayContainer: {
        transform: 'translateX(-100%)',
    },
    rightPanelOverlay: {
        transform: 'translateX(50%)',
    },
    overlayPanel: {
        position: 'absolute',
        top: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '0 40px',
        textAlign: 'center',
        height: '100%',
        width: '50%',
    },
    icon: {
        fontSize: '10rem',
        padding: '10px',
        margin: '15px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '8rem',
        },
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
        marginBottom: '5px',
    },
    overlayButtons: {
        color: theme.palette.common.white,
        borderColor: theme.palette.common.white,
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.7rem',
        },
    },
    containerButtons: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.7rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.6rem',
        },
    },
    '@keyframes show': {
        '0%, 49.99%': {
            opacity: 0,
            zIndex: 1,
        },
        '50%, 100%': {
            opacity: 1,
            zIndex: 5,
        },
    },
    register: {
        color: theme.palette.primary.main,
    },
}));

const LoginCard = ({ control, errors, onSubmit }) => {
    const classes = useStyles();
    const [admin, setAdmin] = useState(true);

    const switchModeHandler = () => {
        setAdmin((prevState) => !prevState);
    };

    return (
        <Grid container className={classes.grid}>
            <Grid
                item
                xs={false}
                sm={8}
                md={6}
                component={Paper}
                elevation={3}
                className={`${classes.adminContainer} ${
                    admin && classes.rightPanelAdminSwipe
                }`}
            >
                <Box className={classes.box}>
                    <Avatar className={classes.avatar}>
                        <AssignmentInd />
                    </Avatar>
                    <Typography component="h1" variant="h5" gutterBottom>
                        Admin Login
                    </Typography>
                    <form onSubmit={onSubmit}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Input
                                    control={control}
                                    name="email"
                                    label="Email"
                                    elementType="TextField"
                                    type="email"
                                    error={errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input
                                    control={control}
                                    name="password"
                                    label="Password"
                                    elementType="TextField"
                                    type="password"
                                    error={errors.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Sign In
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    color="primary"
                                    variant="outlined"
                                    className={classes.containerButtons}
                                >
                                    Forgot Password
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Grid>
            <Grid
                item
                xs={12}
                sm={8}
                md={6}
                component={Paper}
                elevation={3}
                className={`${classes.userContainer} ${
                    admin && classes.rightPanelUserSwipe
                }`}
            >
                <Box className={classes.box}>
                    <Avatar className={classes.avatar}>
                        <AccountCircle />
                    </Avatar>
                    <Typography component="h1" variant="h5" gutterBottom>
                        User login
                    </Typography>
                    <form onSubmit={onSubmit}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Input
                                    control={control}
                                    name="email"
                                    label="Email"
                                    elementType="TextField"
                                    type="email"
                                    error={errors.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Input
                                    control={control}
                                    name="password"
                                    label="Password"
                                    elementType="TextField"
                                    type="password"
                                    error={errors.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    color="primary"
                                    variant="outlined"
                                    className={classes.containerButtons}
                                >
                                    Forgot password
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography
                                    color="textSecondary"
                                    style={{ padding: '5px 0px' }}
                                >
                                    Don&apos;t have an account?{' '}
                                    <Link
                                        href="/register"
                                        className={classes.register}
                                    >
                                        Register Now
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Grid>
            <Grid
                item
                className={`${classes.overlayContainer} ${
                    admin && classes.rightPanelOverlayContainer
                }`}
            >
                <Box
                    className={`${classes.overlay} ${
                        admin && classes.rightPanelOverlay
                    }`}
                >
                    <Box className={classes.overlayPanel}>
                        <AssignmentInd className={classes.icon} />
                        <Button
                            variant="outlined"
                            className={classes.overlayButtons}
                            onClick={switchModeHandler}
                        >
                            ADMIN LOGIN
                        </Button>
                    </Box>
                    <Box
                        className={classes.overlayPanel}
                        style={{ position: 'absolute', top: '0', right: '0' }}
                    >
                        <AccountCircle className={classes.icon} />
                        <Button
                            className={classes.overlayButtons}
                            variant="outlined"
                            onClick={switchModeHandler}
                        >
                            USER LOGIN
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default LoginCard;
