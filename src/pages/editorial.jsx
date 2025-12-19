import { Container, Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import EditorsCard from '../components/UI/Card/EditorsCard';
import Layout from '../hoc/Layout';

const useStyles = makeStyles((theme) => ({
    grid: {
        margin: '20px 0px',
        [theme.breakpoints.down('xs')]: {
            margin: '15px 0px',
        },
    },
    gridItem: {
        margin: '15px 0px',
        backgroundColor: 'whitesmoke',
        borderRadius: '5px',
        padding: '20px',
    },
    caption: {
        padding: '5px',
    },
    title: {
        padding: '5px',
    },
}));

const Editorial = () => {
    const classes = useStyles();
    const editorInChief = [
        {
            name: 'Dr. Bhimasen Soragaon',
            position: 'Editor-in-Chief',
            department: 'Principal, JSSATE - Bangalore',
            email: 'principal@jssateb.ac.in',
            imageUrl: '/assets/images/Dr.%20Bhimasen%20Soragaon.png',
        },
    ];

    const editor = [
        {
            name: 'Dr. Mahesh B',
            position: 'Editor',
            department: 'Professor and Dean Research, JSSATE',
            email: 'Dean_research@jssateb.ac.in',
            imageUrl: '',
        },
    ];

    const associateEditor = [
        {
            name: 'Dr. Abhilash C B',
            position: 'Associate Editor',
            department: 'Associate Professor, Dept. of CSE JSSATE Bangalore',
            email: 'abhilashcb@jssateb.ac.in',
            imageUrl: '',
        },
    ];

    const memberOfBoard = [
        {
            name: 'Dr. Channappa Akki',
            position: 'Member from India',
            department:
                'Professor - Department of Computer Science & Engineering, IIIT Dharwad',
            email: 'akki.channappa@gmail.com,registrar@iiitdwd.ac.in',
            imageUrl: '',
        },
        {
            name: 'Dr. Ashwin T S',
            position: 'Member from International Community',
            department: 'Research Scientist, Vanderbilt University',
            email: 'ashwints@vanderbilt.edu',
            imageUrl: '',
        },
        {
            name: 'Dr John Jose',
            position: 'Member from India',
            department:
                'Associate Professor - Dept. of Computer Science & Engineering, IIT Guwahati',
            email: 'johnjose@iitg.ac.in',
            imageUrl: '',
        },
        {
            name: 'Dr. Rajendra Hegadi',
            position: 'Member from India',
            department:
                'Associate Professor, Dept. of Data Science and Intelligent Systems – IIIT Dharwad',
            email: 'rajendrahegadi@iiitdwd.ac.in',
            imageUrl: '',
        },
        {
            name: 'Dr. Manjunath K V',
            position: 'Member from India',
            department:
                'Assistant Professor, Dept. of Data Science and Intelligent Systems – IIIT Dharwad',
            email: 'manjunathkv@iiitdwd.ac.in',
            imageUrl: '',
        },
        {
            name: 'Dr. Manolis Garoufallou',
            position: 'Member from International Community',
            department:
                'Associate Professor - Head of the Department of Library Science, Archives and Information Systems, School of Social Sciences, International Hellenic University',
            email: 'mgarou@ihu.gr,garoufallou@gmail.com',
            imageUrl: '',
        },
        {
            name: 'Dr. Dinesh Acharya',
            position: 'Member from India',
            department:
                'Professor, Department of Computer Science and Engineering, Manipal Institute of Technology, Manipal Academy of Higher Education, Manipal ',
            email: 'dinesh.acharya@manipal.edu',
            imageUrl: '',
        },
        {
            name: 'Dr. Leslie Edward Lewis',
            position: 'Member from India',
            department:
                'Professor, Department of Paediatrics, Kasturba Medical College, Manipal Academy of Higher Education, Manipal',
            email: 'leslie.lewis@manipal.edu',
            imageUrl: '',
        },
        {
            name: 'Dr. Naidila Sadashiv',
            position: 'Member',
            department:
                'Associate Professor - Department of Computer Science & Engineering, JSSATE',
            email: 'naidila@jssateb.ac.in',
            imageUrl: '/assets/images/Dr.%20Naidila%20Sadashiv.png',
        },
        {
            name: 'Dr Sangesh P Zodape',
            position: 'Member',
            department: 'Asst Professor, VNIT, Nagpur',
            email: 'sangesh02@gmail.com',
            imageUrl: '',
        },
        {
            name: 'Dr Madhukar B S',
            position: 'Member',
            department: 'Associate Professor,JSS S & T University, Mysuru',
            email: 'madhukarbs007@gmail.com',
            imageUrl: '',
        },
    ];

    return (
        <Layout
            title="Editorial Board"
            description="Members of Editorial Board"
        >
            <Container maxWidth="lg">
                <Grid container classes={{ root: classes.grid }}>
                    <Grid item xs={12}>
                        <Typography
                            className={classes.caption}
                            color="textSecondary"
                        >
                            JSS Journal of Scientific Studies
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            EDITORIAL BOARD
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} classes={{ root: classes.gridItem }}>
                        <Typography variant="h5" className={classes.title}>
                            Editor-in-Chief
                        </Typography>
                        {editorInChief.map((member, index) => (
                            <EditorsCard editor={member} key={index} />
                        ))}
                    </Grid>
                    <Grid item xs={12} classes={{ root: classes.gridItem }}>
                        <Typography variant="h5" className={classes.title}>
                            Editor
                        </Typography>
                        {editor.map((member, index) => (
                            <EditorsCard editor={member} key={index} />
                        ))}
                    </Grid>
                    <Grid item xs={12} classes={{ root: classes.gridItem }}>
                        <Typography variant="h5" className={classes.title}>
                            Associate Editor
                        </Typography>
                        {associateEditor.map((member, index) => (
                            <EditorsCard editor={member} key={index} />
                        ))}
                    </Grid>
                    <Grid
                        container
                        spacing={2}
                        classes={{ root: classes.gridItem }}
                    >
                        <Grid item xs={12}>
                            <Typography variant="h5" className={classes.title}>
                                Editorial Board
                            </Typography>
                        </Grid>
                        {memberOfBoard.map((member, index) => (
                            <Grid item lg={6} xs={12} key={index}>
                                <EditorsCard editor={member} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Editorial;
