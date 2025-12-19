import {
    Box,
    Container,
    Divider,
    Grid,
    Hidden,
    Paper,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import React from 'react';
import Layout from '../hoc/Layout';

const useStyles = makeStyles((theme) => ({
    grid: {
        margin: '20px',
        [theme.breakpoints.down('md')]: {
            marginRight: '0px',
            marginLeft: '0px',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '15px -8px',
        },
    },
    mainBox: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column-reverse',
        },
    },
    imageBox: {
        position: 'relative',
        top: '-50px',
        left: '90px',
        backgroundColor: '#e2e1e1',
        height: '40vh',
        width: '50%',
        borderRadius: '80%',
        [theme.breakpoints.down('md')]: {
            width: '28%',
            top: '-2px',
            left: '380px',
        },
    },
    mainImage: {
        maxWidth: '300px',
        height: 'auto',
        borderRadius: '5px',
        position: 'relative',
        top: '5px',
        left: '120px',
        [theme.breakpoints.down('md')]: {
            maxWidth: '260px',
            top: '15px',
            left: '130px',
        },
    },
    secondaryImage: {
        position: 'absolute',
        top: '135px',
        left: '-50px',
        borderRadius: '5px',
        [theme.breakpoints.down('md')]: {
            maxWidth: '240px',
            top: '125px',
        },
    },
    caption: {
        padding: '5px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    icon: {
        width: '40px',
        height: '40px',
        color: '#78100D',
        borderRadius: '50%',
        padding: '5px',
        marginRight: '10px',
    },
    responsiveImage: {
        width: '100%',
        maxWidth: '525px',
        display: 'block',
        height: 'auto',
        borderRadius: '5px',
        padding: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    paperBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px',
    },
    paperInnerBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: '20px 0px',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'row',
            margin: '10px 0px',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            margin: '10px 0px',
        },
    },
    paperHeading: {
        color: theme.palette.primary.main,
        fontWeight: 500,
    },
}));

const Contact = () => {
    const classes = useStyles();

    return (
        <Layout title="Contact Us" description="Contact Information of JSSATEB">
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    classes={{ root: classes.grid }}
                >
                    <Grid item xs={12} sm={12} lg={6}>
                        <Typography
                            className={classes.caption}
                            color="textSecondary"
                        >
                            JSS Journal of Scientific Studies
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            ABOUT US
                        </Typography>
                        <Divider />
                    </Grid>
                    <Box className={classes.mainBox}>
                        <Grid item xs={12} sm={12} lg={6}>
                            <Typography
                                variant="body1"
                                gutterBottom
                                style={{ padding: '10px' }}
                            >
                                JSS Academy of Technical Education (JSSATE) was
                                established in the year 1997 at Bengaluru and is
                                under the umbrella of JSS Mahavidyapeetha,
                                Mysuru. JSSATE is the result of the vision of
                                our President, His Holiness Jagadguru Sri
                                Shivarathri Deshikendra Mahaswamiji to
                                proactively participate in establishing a world
                                class Institution for Technical Education. The
                                Campus is located on a sprawling 21.17 acres
                                land surrounded by lush green plantation on the
                                South-Western edge of Bangalore City. The
                                institution is affiliated to Visvesvaraya
                                Technological University (VTU), Belgaum, India.
                            </Typography>
                        </Grid>
                        <Hidden smDown>
                            <Grid item xs={12} sm={12} lg={6}>
                                <Box className={classes.imageBox}>
                                    <img
                                        className={classes.mainImage}
                                        src="http://jssateb.ac.in/assets/images/welcomeimg060521141152.jpeg"
                                        alt=""
                                    />
                                    <img
                                        className={classes.secondaryImage}
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/JSSATE_Campus_-_Inside_the_Main_Block.JPG/220px-JSSATE_Campus_-_Inside_the_Main_Block.JPG"
                                        alt=""
                                    />
                                </Box>
                            </Grid>
                        </Hidden>
                        <Hidden mdUp>
                            <Grid item xs={12} sm={12} lg={6}>
                                <img
                                    className={classes.responsiveImage}
                                    src="http://jssateb.ac.in/assets/images/welcomeimg060521141152.jpeg"
                                    alt=""
                                />
                            </Grid>
                        </Hidden>
                    </Box>
                </Grid>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    classes={{ root: classes.grid }}
                >
                    <Grid item xs={12}>
                        <Typography variant="h4">CONTACT US</Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Paper elevation={3} className={classes.paper}>
                            <Box>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    className={classes.paperHeading}
                                >
                                    PUBLISHER
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    JSS Academy of Technical Education
                                </Typography>
                            </Box>
                            <Box className={classes.paperBox}>
                                <Typography>
                                    JSSATE-B Campus, Dr.Vishnuvardhan Road,
                                    Uttarahalli - Kengeri Main Road,
                                    Srinivaspura-Post,
                                    <br /> Bengaluru – 560 060, Karnataka, India
                                </Typography>
                            </Box>
                            <Box className={classes.paperInnerBox}>
                                <Box className={classes.paperBox}>
                                    <MailIcon className={classes.icon} />
                                    <Typography>
                                        editor@jssateb.ac.in <br />{' '}
                                        principal@jssateb.ac.in
                                    </Typography>
                                </Box>
                                <Box className={classes.paperBox}>
                                    <PhoneIcon className={classes.icon} />
                                    <Typography>
                                        Ph:080-28612565/28611702 <br />
                                        Fax:080-28612706/28612646
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Paper elevation={3} className={classes.paper}>
                            <Box>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    className={classes.paperHeading}
                                >
                                    CHIEF EDITOR
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    Dr. Bhimasen Soragaon
                                </Typography>
                            </Box>
                            <Box className={classes.paperBox}>
                                <Typography>
                                    Principal <br />
                                    JSSATE-B Campus, Dr.Vishnuvardhan Road,
                                    Uttarahalli - Kengeri Main Road,
                                    Srinivaspura-Post, Bengaluru – 560 060,
                                    Karnataka, India
                                </Typography>
                            </Box>
                            <Box className={classes.paperInnerBox}>
                                <Box className={classes.paperBox}>
                                    <MailIcon className={classes.icon} />
                                    <Typography>
                                        principal@jssateb.ac.in <br />
                                        principal.jssateb97@gmail.com
                                    </Typography>
                                </Box>
                                <Box className={classes.paperBox}>
                                    <PhoneIcon className={classes.icon} />
                                    <Typography>
                                        Ph:080-28612565/28611702 <br />
                                        Fax:080-28612706/28612646
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Contact;
