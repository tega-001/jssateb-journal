import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    footer: {
        width: '100%',
        height: '15%',
        position: 'relative',
        bottom: 0,
        padding: '30px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    link: {
        color: theme.palette.primary.contrastText,
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <footer className={classes.footer}>
                <Grid
                    container
                    spacing={3}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item sm={4} xs={12}>
                        <Box component="div">
                            <Typography align="center">
                                JSS Academy of Technical Education
                                <br />
                                Journal of Scientific Studies
                                <br />
                                <a
                                    href="http://jssateb.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes.link}
                                >
                                    jssateb.ac.in
                                </a>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Box component="div">
                            <Typography align="center">
                                Copyright &copy; {new Date().getFullYear()} -
                                All Rights Reserved
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Box component="div">
                            <Typography align="center">
                                Contact:
                                <br />
                                <a
                                    target="_blank"
                                    className={classes.link}
                                    href="mailto:j-jss@jssateb.ac.in"
                                    rel="noreferrer"
                                >
                                    j-jss@jssateb.ac.in
                                </a>
                                <br />
                                <a
                                    target="_blank"
                                    className={classes.link}
                                    href="tel:08028612565"
                                    rel="noreferrer"
                                >
                                    080 - 2861 2565
                                </a>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </footer>
        </>
    );
};

export default Footer;
