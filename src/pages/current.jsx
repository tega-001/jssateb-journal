import { Container, Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CurrentTable from '../components/UI/Table/CurrentTable';
import Layout from '../hoc/Layout';

const useStyles = makeStyles((theme) => ({
    grid: {
        margin: '20px 0px',
        [theme.breakpoints.down('xs')]: {
            margin: '15px -8px',
        },
    },
    gridItem: {
        margin: '15px 0px',
        padding: '7px 0px',
    },
    caption: {
        padding: '5px',
    },
}));

const paperData = [
    {
        authors:
            'Nawaz Mubashir , RafiqAhmed Mir, Amir Rashid Purra, Fayaz Ahmed Ahnger, Ruqaya Rashid, Nazifa javaid ',
        title: '“Effect of ultrasonic agitation and preheating on marginal adaptation of bulk fill composites. An In vitro OCT (Optical Coherence Tomography) study”',
        page: '05-09',
        link: '/journal/vol2-issue-2/“Effect of ultrasonic agitation and preheating on marginal adaptation of bulk fill composites. An In vitro OCT (Optical Coherence Tomography) study”.pdf',
    },
    {
        authors: 'Kavyashree K L, Vanishree Arun, Mamatha M, Shashikala B M',
        title: 'Cropilizer-A Recommender System',
        page: '10-13',
        link: 'journal/vol2-issue-2/Cropilizer-A Recommender System.pdf',
    },
    {
        authors:
            'Tanisha Agarwal, Student, Mr. Rahul Kumar Gupta, Assistant Professor, Anushka Srivastava, Student, Dr. Arun Kumar G, Professor',
        title: 'IoT Health Monitoring System with Android App',
        page: '14-18',
        link: '/journal/vol2-issue-2/IoT Health Monitoring System with Android App.pdf',
    },
    {
        authors: 'Kavya Pujar, Tejaswini N, Shashikala B M, Vanishree Arun',
        title: 'ECG Analysis for the detection of cardiac arrhytmia',
        page: '19-22',
        link: '/journal/vol2-issue-2/ECG Analysis for the detection of cardiac arrhytmia.pdf',
    },
    {
        authors: 'Dr. Bhanumathi K S Dharithri K V, Sagar P, Shreya Metri',
        title: 'GSM Based Health Monitoring System',
        page: '23-27',
        link: '/journal/vol2-issue-2/GSM Based Health Monitoring System.pdf',
    },
    {
        authors:
            'Bhushan L, Skanda S Rao, Aditya R Patil, Shivani, Dr Jamuna S',
        title: `Design and Implementation of RC Controlled Spy Car`,
        page: '28-33',
        link: '/journal/vol2-issue-2/Design and Implementation of RC Controlled Spy Car.pdf',
    },
    {
        authors:
            'Dr.Saroja S Bhusare , Dr.Veeramma Yathnalli, Prerana D Swamy, Pruthvi K, Rakshita M, S Meenakshi',
        title: 'Computer Cursor Control using Facial Gestures for Physically Challenged',
        page: '34-39',
        link: '/journal/vol2-issue-2/Computer Cursor Control using Facial Gestures for Physically Challenged.pdf',
    },
    {
        authors:
            'Deepika AJ, BM Yashaswini, Haritha D, Anjum Afsha Syed, Dr. Veeramma Yatnalli, Dr. Saroja S Bhusare',
        title: `Voice Control IoT Home Automation using Bluetooth Module`,
        page: '40-46',
        link: '/journal/vol2-issue-2/Voice Control IoT Home Automation using Bluetooth Module.pdf',
    },
    {
        authors: 'Suguna G C, S T Veerabhadrappa, Srushti S',
        title: 'Convulational neural networks for identification of disease in cotton plant',
        page: '47-51',
        link: '/journal/vol2-issue-2/Convulational neural networks for identification of disease in cotton plant.pdf',
    },
    {
        authors: 'Imran Khan, Suchithra HK, Sindhu U, Kirankumar B',
        title: `Design and Comparative Analysis of Micro strip Patch Antenna at 2.4GHz for wireless Applications`,
        page: '52-61',
        link: '/journal/vol2-issue-2/Design and Comparative Analysis of  Micro strip Patch Antenna at 2.4GHz for wireless Applications.pdf',
    },
    {
        authors:
            'Prof. Anitha C G Assistant Professor ,Adarsh Y N, Ankith M, Ankitha M S, Chiranthan P Gowda',
        title: `IOT Enabled Vehicle Parking System`,
        page: '62-67',
        link: '/journal/vol2-issue-2/IOT Enabled Vehicle Parking System.pdf',
    },
    {
        authors: 'Murali S Bharadwaja, Dr. Jamuna S',
        title: `Exploring Circuit Modeling and Radiation Effects using SPICE`,
        page: '68-73',
        link: '/journal/vol2-issue-2/Exploring Circuit Modeling and Radiation Effects using SPICE.pdf',
    },
    {
        authors:
            'Kavitha M, Sheela S N, Akshay Narasimha R V, Akarsh S, Kishore C, Mohan kumar V',
        title: `Gesture Controlled Robot Using Arduino`,
        page: '74-76',
        link: '/journal/vol2-issue-2/Gesture Controlled Robot Using Arduino.pdf',
    },
    {
        authors:
            'Vishwas G Rao ,Sowmya M S , Chandini C , Vinay M , Yamini K J',
        title: `Implementation of solar energy and IoT for water waste management: A review`,
        page: '77-83',
        link: '/journal/vol2-issue-2/Implementation of solar energy and IoT for water waste management A review.pdf',
    },
    {
        authors:
            'Prajwal V , Samarth R Bogar , Shambhavi Jagadeesh , Vishwas R , D V Ashoka',
        title: `Integration of Edge Detection and Machine Learning Techniques in Smart Traffic Management`,
        page: '84-91',
        link: '/journal/vol2-issue-2/Integration of Edge Detection and Machine  Learning Techniques in Smart Traffic Management.pdf',
    },
];

const Current = () => {
    const classes = useStyles();
    // const data = [
    //     {
    //         title: 'Vol 1 Issue 1',
    //         publishedDate: 'Jan - Jun 2022',
    //         page: '10-12',
    //         startPage: 11,
    //         endPage: 104,
    //         authors: [
    //             'First issue of the Vol 1 of the JSS Journal of Scientific Studies',
    //         ],
    //         description:
    //             'First issue of the Vol 1 of the JSS Journal of Scientific Studies',
    //         link: 'https://drive.google.com/file/d/1umoFKDcAvFAo3pHept7g2LxEOEVroGfb/view?usp=sharing',
    //         //TODO: Either we will use a link or archive id to retrieve from the database
    //     },
    // ];

    return (
        <Layout title="Current Issue" description="Current Issue of Journal">
            <Container maxWidth="lg" classes={{ root: classes.root }}>
                <Grid container spacing={2} classes={{ root: classes.grid }}>
                    <Grid item xs={12}>
                        <Typography
                            className={classes.caption}
                            color="textSecondary"
                        >
                            JSS Journal of Scientific Studies
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            VOL 2 ISSUE 2
                        </Typography>
                        <Divider />
                    </Grid>
                    {/* {data.map((item, index) => (
                        <Grid
                            item
                            xs={12}
                            key={index}
                            classes={{ root: classes.gridItem }}
                        >
                            <CurrentCard key={index} item={item} />
                        </Grid>
                    ))} */}
                    <CurrentTable
                        data={paperData}
                        headings={[
                            { heading: 'S.No', align: 'center' },
                            {
                                heading: 'Volumne-2 Issue-2, January 2024',
                                align: 'center',
                            },
                            {
                                heading: 'Page No.',
                                align: 'center',
                            },
                            {
                                heading: 'Download',
                                align: 'center',
                            },
                        ]}
                    />
                </Grid>
            </Container>
        </Layout>
    );
};

export default Current;
