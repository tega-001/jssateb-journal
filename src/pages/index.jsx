import { Box, Container, Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import BasicTable from '../components/UI/Table/BasicTable';
import Layout from '../hoc/Layout';

const useStyles = makeStyles((theme) => ({
    grid: {
        justifyContent: 'center',
    },
    gridItem: {
        width: '100%',
        margin: '20px 0px',
        padding: '15px 0px',
        '&:nth-of-type(odd)': {
            backgroundColor: 'whitesmoke',
            borderRadius: '5px',
        },
    },
    cards: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'spaced-around',
    },
    mainGrid: {
        height: '600px',
        width: '100vw',
        background: 'black',
        overflow: 'hidden',
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        padding: '0px !important',
        [theme.breakpoints.down('sm')]: {
            height: '500px',
        },
        [theme.breakpoints.down('xs')]: {
            height: '350px',
        },
        // background: '#C33764',
        // background:
        //     ' -webkit-linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8))',
    },
    image: {
        objectFit: 'cover',
        height: '600px',
        width: '100vw',
        opacity: '0.4',
        [theme.breakpoints.down('xs')]: {
            height: '450px',
        },
    },
    imageText: {
        position: 'absolute',
        top: '32%',
        left: '4%',
        [theme.breakpoints.down('md')]: {
            left: '8%',
        },
        [theme.breakpoints.down('sm')]: {
            top: '35%',
            left: '5%',
        },
        [theme.breakpoints.down('xs')]: {
            left: '3%',
        },
    },
    text: {
        margin: '20px auto',
        padding: '15px',
    },
    divider: {
        height: '2px',
    },
    mainText: {
        fontSize: '5rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '4.5rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '3.6rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.6rem',
        },
    },
    secondaryText: {
        fontSize: '2.2rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.7rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
    },
    viewBtn: {
        padding: '10px 5px',
        marginBottom: '10px',
        '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: 'transparent',
        },
    },
    editorialBox: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px 35px',
        [theme.breakpoints.down('xs')]: {
            margin: '10px',
        },
    },
}));

// const data = [
//     {
//         title: 'Android Mobile Based Voting System through Facial Recognition',
//         authors: ['Evert A. Lindquist', 'Michael Buttazzoni'],
//         startPage: 212,
//         endPage: 227,
//         publishedDate: '13 Jul 2021',
//         link: 'https://ieeexplore.ieee.org/document/7154786',
//     },
//     {
//         title: 'Android Mobile Based Voting System through Facial Recognition',
//         authors: ['Evert A. Lindquist', 'Michael Buttazzoni'],
//         startPage: 212,
//         endPage: 227,
//         publishedDate: '13 Jul 2021',
//         link: 'https://ieeexplore.ieee.org/document/7154786',
//     },
//     {
//         title: 'Android Mobile Based Voting System through Facial Recognition',
//         authors: ['Evert A. Lindquist', 'Michael Buttazzoni'],
//         startPage: 212,
//         endPage: 227,
//         publishedDate: '13 Jul 2021',
//         link: 'https://ieeexplore.ieee.org/document/7154786',
//     },
// ];

const paperData = [
    {
        title: 'Title:',
        content: 'JSS Journal of Scientific Studies',
    },
    {
        title: 'Frequency:',
        content: 'Bi-annual',
    },
    {
        title: 'ISSN:',
        content: '2583-5815',
    },
    {
        title: 'Publisher:',
        content: 'JSS Academy of Technical Education, Bengaluru',
    },
    {
        title: 'Chief Editor:',
        content: 'Dr. Bhimasen Soragaon',
    },
    {
        title: 'Copyright:',
        content: 'JSS Academy of Technical Education, Bengaluru',
    },
    {
        title: 'Starting Year:',
        content: '2022',
    },
    {
        title: 'Subject:',
        content: 'Multi Disciplinary Subjects',
    },
    {
        title: 'Language:',
        content: 'English',
    },
    {
        title: 'Publication Format:',
        content: 'Online | Offline',
    },
    {
        title: 'Phone No:',
        content: '080-28612565 | 080-28611702',
    },
    {
        title: 'Email Id:',
        content: 'editor@jssateb.ac.in',
    },
    {
        title: 'Mobile No:',
        content: '+91 9899404999',
    },
    {
        title: 'Website:',
        content: 'https://jssateb-journal.vercel.app/',
    },
    {
        title: 'Address:',
        content:
            'JSSATE-B Campus, Dr.Vishnuvardhan Road, Uttarahalli Kengeri Main Road, Srinivaspura-Post, Bengaluru – 560 060, Karnataka, India',
    },
];

const Home = () => {
    const classes = useStyles();
    return (
        <Layout
            title="JSS Journal of Scientific Studies"
            description="Home page of JSS Journal of Scientific Studies "
        >
            <Container maxWidth="lg">
                <Grid container spacing={2} classes={{ root: classes.grid }}>
                    <Grid item xs={12} className={classes.mainGrid}>
                        <img
                            className={classes.image}
                            src="https://images.squarespace-cdn.com/content/v1/59b71931d7bdce8efdadfc2f/1532556894726-LU1274AZWL1WYRG9JCFJ/five+writing+crimes+to+remedy+asap+coffee+laptop+woman+typing+book+pen+desk+Juniper+Editing+and+Creative+Canadian+book+editor+Feminist+book+editor.jpg?format=1000w"
                            alt=""
                        />
                        <Box className={classes.imageText}>
                            <Typography
                                variant="h2"
                                align="center"
                                gutterBottom
                                className={classes.mainText}
                            >
                                JSS Journal of Scientific Studies
                            </Typography>

                            <Typography
                                variant="h4"
                                align="center"
                                className={classes.secondaryText}
                            >
                                ISSN 2583-5815
                            </Typography>
                            <Typography
                                variant="h4"
                                align="center"
                                className={classes.secondaryText}
                            >
                                A Multi-Disciplinary Journal of
                            </Typography>
                            <Typography
                                variant="h4"
                                align="center"
                                className={classes.secondaryText}
                            >
                                JSS Academy of Technical Education, Bengaluru
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className={classes.gridItem}>
                        <Typography variant="h4" align="center" gutterBottom>
                            JOURNAL
                        </Typography>
                        <Divider />
                        <Typography
                            variant="body1"
                            align="center"
                            gutterBottom
                            className={classes.text}
                        >
                            “JSS Journal of Scientific Studies: J-JSS” is an
                            official Journal of JSS Academy of Technical
                            Education,Bengaluru. It is a multidisciplinary free
                            open access biannual journal and shall publish
                            rigorous high-quality peer reviewed research
                            outcomes with quantitative and qualitative aspects
                            of Engineering, Science and Management. Journal will
                            be published in both the print and online version.
                            The Journal shall also offer special issues devoted
                            to advances in specific areas of Science and
                            Engineering. All papers are published in English.
                        </Typography>
                        {/* <Typography
                        variant="body1"
                        align="center"
                        gutterBottom
                        className={classes.text}
                    >
                        JSS Academy of Technical Education (JSSATE) was
                        established in the year 1997 at Bengaluru and is under
                        the umbrella of JSS Mahavidyapeetha, Mysuru. JSSATE is
                        the result of the vision of our President, His Holiness
                        Jagadguru Sri Shivarathri Deshikendra Mahaswamiji to
                        proactively participate in establishing a world class
                        Institution for Technical Education. The Campus is
                        located on a sprawling 21.17 acres land surrounded by
                        lush green plantation on the South-Western edge of
                        Bengaluru City. The institution is affiliated to
                        Visvesvaraya Technological University (VTU), Belagavi,
                        India.
                    </Typography> */}
                    </Grid>
                    {/* TODO: Recent issues */}
                    {/* <Grid item className={classes.gridItem}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Recent Issues
                    </Typography>
                    <Divider className={classes.divider} variant="middle" />
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        margin="25px 25px 10px"
                        padding="15px"
                    >
                        <Grid container>
                            {data.map((item, index) => (
                                <Grid
                                    md={4}
                                    sm={6}
                                    xs={12}
                                    item
                                    key={index}
                                    className={classes.cards}
                                >
                                    <CurrentCard
                                        key={index}
                                        item={item}
                                        style={{
                                            height: 'auto',
                                            display: 'block',
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <Box display="flex" justifyContent="flex-end">
                        <Link href="/current">
                            <Button
                                variant="text"
                                className={classes.viewBtn}
                                endIcon={<NavigateNextIcon />}
                            >
                                VIEW MORE ISSUES
                            </Button>
                        </Link>
                    </Box>
                </Grid> */}
                    {/* TODO: Shedule */}
                    {/* <Grid
                    container
                    className={classes.gridItem}
                    justifyContent="center"
                >
                    <Typography variant="h4" gutterBottom align="center">
                        Schedule of JSSATEB Publication
                    </Typography>
                    <Divider />
                    <BasicTable />
                </Grid> */}
                    <Grid item className={classes.gridItem}>
                        <Typography variant="h4" gutterBottom align="center">
                            JOURNAL PARTICULARS
                        </Typography>
                        <Divider className={classes.divider} variant="middle" />
                        <Box className={classes.editorialBox}>
                            <Grid container>
                                <BasicTable
                                    data={paperData}
                                    headings={[
                                        { heading: '', align: 'center' },
                                        {
                                            heading: '',
                                            align: 'left',
                                        },
                                    ]}
                                />
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} className={classes.gridItem}>
                        <Typography variant="h4" gutterBottom align="center">
                            DISCLAIMER
                        </Typography>
                        <Divider />
                        <Box margin="20px" padding="10px">
                            <Typography gutterBottom variant="body1">
                                The concerned authors are solely responsible and
                                accountable for the contents of their papers
                                published in J-JSS.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                The Chief Editor, Editor, Associate Editor and
                                Editorial Advisory Board or publishers do not
                                claim any responsibility, liability of
                                statements made and opinion expressed by authors
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                The views expressed in the research
                                papers/articles may not essentially correspond
                                to the views of the Chief Editor, Editor,
                                Associate Editor and Editorial Board.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Errors, if any, are purely unintentional and
                                readers are requested to communicate such errors
                                to the editors to avoid discrepancies in future.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                The Chief Editor, Editor, Associate Editor and
                                Advisory Board will not be liable for any
                                mistake or consequences arising from the
                                exercise of information contained in it.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Home;
