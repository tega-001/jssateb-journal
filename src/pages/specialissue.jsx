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
        authors: 'Ryan Gupta , Varsha R , Yuktha B Ramji, Suja Jayan',
        title: '“Chatbot for Ordering System”',
        page: '05-09',
        link: '/journal/rejssjournal/Paper_16.pdf',
    },
    {
        authors: 'Pranava C Hiremath, Varsha R, Sreenivas Gurram , Rohith B',
        title: 'SPEAR(Split Panel Engine for Automatic Rendering):An innovative AI-Powered Web Development Assistanr',
        page: '10-13',
        link: '/journal/rejssjournal/paper_17.pdf',
    },
    {
        authors: 'Anoop N Prasad,Shree Vibha S,Harshita AB',
        title: 'AI Driven Chatbot for Personalised Student and Parent Support',
        page: '14-18',
        link: '/journal/rejssjournal/paper_21.pdf',
    },
    {
        authors:
            'Mrs. Ramya B N, Mr. Adithya K,Mr. Dayanand K , Ms. Janhavi P , Ms. Koyilada Jahnavi',
        title: 'A Novel AI-Driven Multimodal Deepfake Detection Using Temporal Dynamics, and Gaze Consistency Analysis',
        page: '19-22',
        link: '/journal/rejssjournal/paper_23.pdf',
    },
    {
        authors:
            'Dr. Manjunath HR,Mr. Aniruddha H D, Ms. Priya R Vishwaroop , Mr. Rahul V , Ms. Sriraksha S ',
        title: 'A Novel Middleware Framework For Enhancing LLM Security',
        page: '23-27',
        link: '/journal/rejssjournal/paper_24.pdf',
    },
    {
        authors:
            'Ramya B N , Diya K Bhat , Vivin Jayanth A M , Samarth S L , Sudarshan D J',
        title: `A Location-Intelligent, Budget-Centric Restaurant Recommender Using Probabilistic Clustering`,
        page: '28-33',
        link: '/journal/rejssjournal/paper_31.pdf',
    },
    {
        authors:
            'Ramya B N, Mayur N , Sai Sharan R S , J Sanjana , Tejaswini M',
        title: "A Dual Mode Framework for StageWise Detection and Treatment Simulation of Alzheimer's Disease Using CNN and Reinforcement Learning",
        page: '34-39',
        link: '/journal/rejssjournal/paper_33.pdf',
    },
    {
        authors:
            'Meghana Pradeep , Dhanu B L , Akshata Prasad , Prof. Yashaswini C D ',
        title: `HirEase: A Unified AI-Powered Platform for Streamlined Technical Hiring`,
        page: '40-46',
        link: '/journal/rejssjournal/paper_36.pdf',
    },
    {
        authors: 'Anand Kumar B , Sukruth S , Kavya B R',
        title: 'Smart Gas Guardian: Gas Monitoring and Alert System',
        page: '47-51',
        link: '/journal/rejssjournal/paper_40.pdf',
    },
    {
        authors:
            'Meghana Pradeep , Keerthan M , Akshatha Prasad , Manith Gowda K R , Prof Yashaswini C D ',
        title: `Sherpa: A Safety-Driven Navigation Platform Using REal-Time Crime Analytics and Community Reporting`,
        page: '52-61',
        link: '/journal/rejssjournal/paper_44.pdf',
    },
];

const specialissue = () => {
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
                            Special Issue
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            11th National Conference on Advancements in
                            Information Technology (NCAIT-2025)
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            This special edition presents selected research
                            contributions from the 11th National Conference on
                            Advancements in Information Technology (NCAIT-2025),
                            organized by the Department of Information Science
                            and Engineering, JSS Academy of Technical Education,
                            Bangalore, on 28th May 2025. Conducted under the
                            Samyog Student Forum, NCAIT has emerged as a
                            sustained academic platform over the past eleven
                            years, fostering research dissemination and
                            collaborative learning among students, academicians,
                            and industry professionals. The theme of NCAIT-2025,
                            “AI Brains & Infinite Memory”, focused on the
                            rapidly evolving paradigm of artificial intelligence
                            and its transformative impact on information
                            technology, encompassing intelligent systems,
                            data-driven decision making, and emerging
                            computational models. This year we also had the
                            support of IEEE - Information Theory Society student
                            branch for the event.
                            <br />
                            The event was inaugurated by distinguished academic
                            leaders and featured a keynote address by Mr.
                            Pradeep M. P, Head of Cloud Security, Privacy &
                            Compliance – Europe & Americas, Ericsson, Bengaluru,
                            who highlighted the evolving role of AI from
                            automation to advanced cognitive intelligence and
                            its implications for future research and ethical
                            innovation. Through technical sessions and scholarly
                            discussions, NCAIT-2025 provided a vibrant forum for
                            knowledge exchange, encouraging young researchers to
                            explore emerging challenges and opportunities in
                            Information technology. This special edition stands
                            as a testament to the conference’s commitment to
                            academic excellence, innovation, and research-driven
                            learning.
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
                                heading: 'Volumne-2 Issue-2, January 2025',
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

export default specialissue;
