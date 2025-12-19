import { Container, Divider, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NotificationCard from '../components/UI/Card/NotificationCard';
import BasicTable from '../components/UI/Table/BasicTable';
import Layout from '../hoc/Layout';

const useStyles = makeStyles((theme) => ({
    grid: {
        margin: '20px 0px',
        [theme.breakpoints.down('xs')]: {
            margin: '15px -8px',
        },
    },
    gridItem: {
        margin: '12px 0px',
        padding: '10px 0px',
    },
    caption: {
        padding: '5px',
    },
    primary: {
        color: theme.palette.primary.main,
    },
    list: {
        fontSize: '1rem',
        fontFamily: 'Roboto',
        fontWeight: '400',
        lineHeight: '1.5',
        marginTop: '0px',
    },
    discList: {
        listStyleType: 'disc',
    },
}));

const Submission = () => {
    const classes = useStyles();

    const paperData = [
        {
            title: 'Journal Coverage:',
            content:
                'All diverse areas of Science, Engineering, Technology and Business Management & Entrepreneurship',
        },
        {
            title: 'Publication Type:',
            content: 'Online & Print',
        },
        {
            title: 'Publishing Model:',
            content: 'Open Access/Free subscription',
        },
        {
            title: 'Accepted Language:',
            content: 'English',
        },
        {
            title: 'Publication Frequency:',
            content:
                'Bi-Annual (2 Issues per year); January-June & July-December',
        },
        {
            title: 'Type of Articles Accepted:',
            content:
                'Research Papers | Survey Papers | Informative Articles | Case Studies | Review Papers | Comparative Studies etc',
        },
        {
            title: 'Initial Paper Submission:',
            content:
                'Submissions should be done electronically to facilitate very rapid turnaround time that the Journal aims at.  Authors should submit their original papers in the IEEE format only.',
        },
        {
            title: 'Final Paper Submission:',
            content: `Each accepted paper must be modified as per the reviewer's report in J-JSS paper format and must be submitted along with copy-right form, on or before the deadline mentioned in the acceptance notification.`,
        },
    ];

    return (
        <Layout
            title="Journal Submission"
            description="Steps for Submission of Journal Paper to JSS Journal of Scientific Studies"
        >
            <Container maxWidth="lg">
                <Grid container spacing={2} classes={{ root: classes.grid }}>
                    <Grid item xs={12} sm={12}>
                        <Typography
                            className={classes.caption}
                            color="textSecondary"
                        >
                            JSS Journal of Scientific Studies
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            CALL FOR PAPERS
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} classes={{ root: classes.gridItem }}>
                        <Typography variant="body1" className={classes.caption}>
                            Dear Authors, <br />
                            We are pleased to inform you that JSS Academy of
                            Technical Education Bangalore has launched its own
                            Journal titled: “JSS Journal of Scientific Studies”
                            (J-JSS).The first issue of the journal (Volume I,
                            Issue I, January-June) has already been published.
                            The Journal has been granted with International
                            Standard Serial Number which is{' '}
                            <strong>2583-5815</strong>.
                            <br />
                            The research articles are invited for{' '}
                            <strong>Volume III, Issue 2</strong> and being
                            accepted till{' '}
                            <strong>
                                30<sup>th</sup> October 2025
                            </strong>
                            . The aim of the journal is to provide a platform to
                            researchers, practitioners, academicians and
                            professionals associated with the fields of
                            engineering and business management. We intend to
                            publish original research articles, case studies,
                            review articles, technical notes and short
                            communications in this journal. Papers published in
                            (J-JSS) are expected to receive good publicity and
                            acquire high reputation. All submitted papers will
                            be peer reviewed, published in online and print
                            version.
                        </Typography>
                        <BasicTable
                            data={paperData}
                            headings={[
                                { heading: 'Details', align: 'center' },
                                {
                                    heading: 'Requirements',
                                    align: 'left',
                                },
                            ]}
                        />
                        <NotificationCard>
                            <Link href="/guidelines">
                                <Typography variant="h6">
                                    Click here for author guidelines
                                </Typography>
                            </Link>
                        </NotificationCard>

                        <NotificationCard>
                            <Link
                                download="ResearchpaperTemplate.docx"
                                href="/assets/docs/ResearchpaperTemplate.docx"
                                title="ResearchPaperTemplate"
                            >
                                <Typography variant="h6">
                                    Click here to download Research paper
                                    template.
                                </Typography>
                            </Link>
                        </NotificationCard>
                        <NotificationCard>
                            <Typography variant="h6">
                                Please submit the paper on the following e-mail
                                id -{' '}
                                <a
                                    href="mailto:editor@jssateb.ac.in"
                                    target="_blank"
                                    className={classes.primary}
                                    rel="noopener noreferrer"
                                >
                                    editor@jssateb.ac.in
                                </a>
                            </Typography>
                        </NotificationCard>
                    </Grid>
                    <Grid item xs={12} classes={{ root: classes.gridItem }}>
                        <Typography variant="h4" gutterBottom>
                            CONTENTS OF RESEARCH ARTICLE
                        </Typography>
                        <Divider />
                        <Typography
                            variant="body1"
                            style={{ padding: '5px', marginTop: '10px' }}
                        >
                            A research article (not exceeding 5000 words) may
                            contain the following sections:
                        </Typography>
                        <ol className={classes.list}>
                            <li>Title of the Paper</li>
                            <li>
                                Author&lsquo;s affiliation with name,
                                designation, dept, college, place, country
                            </li>
                            <li>
                                Abstract (not exceeding 300 words) with Keywords
                                <ul className={classes.discList}>
                                    <li>Introduction</li>
                                    <li>
                                        Literature Survey/ Materials and
                                        Methods/System Model
                                    </li>
                                    <li>
                                        Presentation of the Main Contribution of
                                        the Paper/ Scope of Research
                                    </li>
                                    <li>Proposed Methodology and Discussion</li>
                                    <li>
                                        Experimental Results with Tables &
                                        Graphs
                                    </li>
                                    <li> Conclusions</li>
                                </ul>
                            </li>
                            <li>References</li>
                            We firmly believe that your contribution will enrich
                            the academic, intellectual content of the journal,
                            along with opening up of new vistas of research.
                            <br /> We invite faculty members, research scholars,
                            post-graduate students and authors to submit their
                            original and extended research to publish in this
                            research journal.
                        </ol>
                        {/* <NotificationCard>
                            <Typography variant="h6">
                                Last date for submission is:{' '}
                                <span className={classes.primary}>
                                    15<sup>th</sup> January 2022 (Extended to 30
                                    <sup>th</sup> March 2022)
                                </span>
                            </Typography>
                        </NotificationCard> */}
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Submission;
