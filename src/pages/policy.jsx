import { Container, Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SimpleAccordion from '../components/UI/Accordion/Accordion';
import Layout from '../hoc/Layout';

const useStyles = makeStyles((theme) => ({
    grid: {
        margin: '20px 0px',
        [theme.breakpoints.down('xs')]: {
            margin: '15px -8px',
        },
    },
    gridItem: {
        margin: '5px 0px',
    },
    caption: {
        padding: '5px',
    },
    link: {
        color: theme.palette.primary.main,
    },
    list: {
        fontSize: '1rem',
        fontFamily: 'Roboto',
        fontWeight: '400',
        lineHeight: '1.5',
        marginTop: '5px',
    },
}));

const Policy = () => {
    const classes = useStyles();

    const general = [
        'The work described has not been published before and is not under consideration for publication anywhere else.',
        'Its publication has been approved by all co-authors, if any, as well as by the responsible authorities-tacitly or explicitly-at the institute where the work has been carried out.',
        'Authors wishing to include figures, tables, or text passages that have already been published elsewhere are required to obtain permission from the copyright owner(s), and to include evidence that such permission has been granted when submitting their papers. Any material received without such evidence will be assumed to originate from the author(s).',
    ];

    const data = [
        {
            title: 'Ethics',
            content: (
                <>
                    <Typography className={classes.caption}>
                        <strong>Authorship of the paper:</strong> Authorship
                        should be limited to those who have made a significant
                        contribution to the conception, design, execution, or
                        interpretation of the reported study.
                    </Typography>
                    <Typography className={classes.caption}>
                        <strong>Originality and Plagiarism: </strong> The
                        authors should ensure that they have written entirely
                        original works, and if the authors have used the work
                        and/or words of others, they should ensure that this has
                        been appropriately cited or quoted.
                    </Typography>
                    <Typography className={classes.caption}>
                        <strong>Data Access and Retention:</strong> Authors may
                        be asked to provide the raw data in connection with a
                        paper for editorial review, and should be prepared to
                        provide public access to such data.
                    </Typography>
                    <Typography className={classes.caption}>
                        <strong>Acknowledgement of Sources:</strong> Proper and
                        adequate acknowledgment of all the sources referred
                        to/accessed for the paper.
                    </Typography>
                    <Typography className={classes.caption}>
                        <strong>Reporting Standards:</strong> Authors of reports
                        of original research should present an accurate account
                        of the work performed as well as an objective discussion
                        of its significance.
                    </Typography>
                    <Typography className={classes.caption}>
                        <strong>
                            Multiple, Redundant or Concurrent Publication:
                        </strong>{' '}
                        In general, an author should not publish manuscripts
                        describing essentially the same research in more than
                        one journal or primary publication.
                    </Typography>
                    <Typography className={classes.caption}>
                        <strong>Disclaimer:</strong>
                    </Typography>
                    <ul className={classes.list}>
                        <li>
                            The concerned authors are solely responsible and
                            accountable for the contents of their papers
                            published in J-JSS.
                        </li>
                        <li>
                            The Chief Editor, Editor, Associate Editor and
                            Editorial Advisory Board/Committee or publishers do
                            not claim any responsibility, liability of
                            statements made and opinion expressed by authors.
                        </li>
                        <li>
                            The views expressed in the research papers/articles
                            may not essentially correspond to the views of the
                            Chief Editor, Editor, Associate Editor and Editorial
                            Advisory Board/Committee or publishers.
                        </li>
                        <li>
                            Errors, if any, are purely unintentional and readers
                            are requested to communicate such errors to the
                            editors to avoid discrepancies in future.
                        </li>
                        <li>
                            The Chief Editor, Editor, Associate Editor and
                            Editorial Advisory Board/Committee or publishers
                            will not be liable for any mistake or consequences
                            arising from the exercise of information contained
                            in it.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: 'Peer Review and Publication',
            content: (
                <>
                    <Typography className={classes.caption}>
                        This journal uses blind peer review process, which means
                        that both the reviewer(s) and author(s) identities are
                        concealed from each other, throughout the review
                        process. This means that the reviewer(s) of the paper
                        won’t get to know the identity of the author(s), and the
                        author(s) won’t get to know the identity of the
                        reviewer(s).
                    </Typography>
                    <Typography className={classes.caption}>
                        Journal is committed to prompt evaluation and
                        publication of fully accepted papers. To maintain a
                        high-quality publication, all submissions undergo a
                        rigorous review process. Features of the peer review
                        process are as follows:
                    </Typography>
                    <ul>
                        <li>
                            <Typography className={classes.caption}>
                                <strong>Step 1:</strong> Every paper submitted
                                for publication is read by an editor/editorial
                                committee member, for an initial review.
                            </Typography>
                        </li>
                        <li>
                            <Typography className={classes.caption}>
                                <strong>Step 2:</strong> If the paper agrees
                                with editorial policies and with a minimum
                                quality level, then it is sent to the empanelled
                                reviewers, along with ‘Guidelines for
                                Review&sbquo; and the Review Report Format.
                                <br />
                                Reviewers&sbquo; comments to the editors are
                                sought with specific recommendations whether the
                                paper:
                            </Typography>
                            <ul className={classes.list}>
                                <li>Can be accepted in its present form</li>
                                <li>
                                    Can be accepted subject to change(s) being
                                    suggested
                                </li>
                                <li>
                                    Should be re-submitted with significant
                                    changes for further review
                                </li>
                                <li>Should be rejected</li>
                            </ul>
                        </li>
                        <li>
                            <Typography className={classes.caption}>
                                <strong>Step 3:</strong>
                            </Typography>
                            <ul className={classes.list}>
                                <li>
                                    Based on the reviewers&sbquo;
                                    recommendations, the Editorial Committee
                                    takes further actions as required and makes
                                    a final decision on the acceptability of the
                                    manuscript, and the author/corresponding
                                    author(s) will be notified about the
                                    acceptance and the possible date of
                                    publication, along with reviewers&sbquo;
                                    reports. Reviewers&sbquo; reports are kept
                                    confidential and before passing on to the
                                    author will be made anonymous.
                                </li>
                                <li>
                                    If significant revisions are proposed,
                                    acceptance is dependent on whether the
                                    author deals with those satisfactorily and
                                    resubmits the paper within the given time;
                                    the same reviewers will be assessing the
                                    resubmitted paper in order to ensure the
                                    suggestions are fully incorporated and the
                                    paper is suitably and satisfactorily
                                    revised. Authors of papers that are not
                                    accepted are notified promptly.
                                </li>
                                <li>
                                    The entire process takes a maximum of 1-3
                                    months.
                                </li>
                                <li>
                                    Simultaneous submissions of the same
                                    manuscript to different journals will not be
                                    tolerated.
                                </li>
                                <li>
                                    Manuscripts with contents outside the scope
                                    will not be considered for review.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: 'Plagiarism',
            content: (
                <>
                    <ul className={classes.list}>
                        <li>
                            All manuscripts submitted for publication are
                            checked for plagiarism through the authenticated
                            software - ithenticate or turnitin or Viper.
                        </li>
                        <li>
                            Manuscripts must not have more than 30% similarity
                            index for farther processing.
                        </li>
                        <li>
                            {`Journal follows "Norms of UGC" (PROMOTION OF
                                ACADEMIC INTEGRITY AND PREVENTION OF PLAGIARISM
                                IN HIGHER EDUCATIONAL INSTITUTIONS),
                                2018.`}
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: 'Open Access',
            content: (
                <Typography variant="body1" className={classes.caption}>
                    Journal is aimed at providing high quality research articles
                    to the academic community without any cost. This journal
                    provides open access to its contents for making it one of
                    the open sources available to the research community in
                    science, engineering, technology, business entrepreneurship
                    and management domains.
                </Typography>
            ),
        },
        {
            title: 'Copyrights',
            content: (
                <Typography variant="body1" className={classes.caption}>
                    Journal holds copyrights for the articles including
                    abstracts published in the journal as accepted by the author
                    in full consent in order to ensure full copyright protection
                    and to disseminate the journal internationally.
                </Typography>
            ),
        },
        {
            title: 'Retraction of Articles',
            content: (
                <>
                    <Typography className={classes.caption}>
                        The Journal follows the COPE (Committee on Publication
                        Ethics) guidelines for Retraction of articles: It can be
                        found{' '}
                        <a
                            href="http://publicationethics.org/files/retraction%20guidelines.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.link}
                        >
                            here.
                        </a>
                    </Typography>
                </>
            ),
        },
    ];

    return (
        <Layout
            title="Journal Policy"
            description="Policies followed by JSS Journal of Scientific Studies"
        >
            <Container maxWidth="lg">
                <Grid container spacing={2} classes={{ root: classes.grid }}>
                    <Grid item xs={12}>
                        <Typography
                            className={classes.caption}
                            color="textSecondary"
                        >
                            JSS Journal of Scientific Studies
                        </Typography>
                        <Typography variant="h4" gutterBottom>
                            POLICY
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12} classes={{ root: classes.gridItem }}>
                        {general.map((item, index) => (
                            <Typography
                                variant="body1"
                                key={index}
                                gutterBottom
                                className={classes.caption}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item xs={12} classes={{ root: classes.gridItem }}>
                        {data.map((item, index) => (
                            <SimpleAccordion
                                key={index}
                                title={item.title}
                                content={item.content}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Policy;
