import { Box, Container, Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../hoc/Layout';

const useStyles = makeStyles((theme) => ({
    grid: {
        margin: '20px 0px',
        [theme.breakpoints.down('xs')]: {
            margin: '15px -8px',
        },
    },
    gridItem: {
        border: '1px solid whitesmoke',
        padding: '0px !important',
        margin: '10px',
        borderRadius: '5px',
        boxShadow: '0px 2px 3px #e2e1e1',
    },
    caption: {
        padding: '8px',
    },
    title: {
        backgroundColor: 'whitesmoke',
        padding: '8px',
        borderRadius: '5px',
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
    },
    list: {
        fontSize: '1rem',
        fontFamily: 'Roboto',
        fontWeight: '400',
        lineHeight: '1.5',
    },
    inlineList: {
        fontSize: '1rem',
        fontFamily: 'Roboto',
        fontWeight: '400',
        lineHeight: '1.5',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        margin: '0px',
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
    },
}));

const GuideLines = () => {
    const classes = useStyles();
    const data = [
        {
            title: 'Manuscript Format',
            content: (
                <>
                    <Typography variant="body1">
                        Articles published in this journal are expected to meet
                        scholarly expectations in both formatting and content.
                        It is expected to maintain the maximum limits of 5000
                        words including table and graphs. All pages must be
                        typed and double-spaced (including notes and references)
                        using 12-point Times New Roman (or similar) font. Please
                        use a 1-inch margin on all sides. Each table and figure
                        should be on a separate page. The object is to provide
                        reviewers and editors with easy-to-read text and space
                        for notes. It is the responsibility of authors to submit
                        manuscripts in the proper format. Papers that are judged
                        to be unnecessarily lengthy, poorly written, and
                        theoretically under-developed or based on poor science
                        will be rejected by the editors and not sent out for
                        peer review. All submissions should include, in the
                        following order:{' '}
                    </Typography>
                    <ul className={classes.inlineList}>
                        <li>Title page</li>
                        <li>Abstract</li>
                        <li>Keywords</li>
                        <li>Main text</li>
                        <li> Endnotes</li>
                        <li>Acknowledgements</li>
                        <li> References</li>
                        <li>Tables</li>
                        <li> Figures. </li>
                    </ul>
                </>
            ),
        },
        {
            title: 'Language',
            content: (
                <Typography variant="body1">
                    The official language of this journal is English. Any
                    manuscript that does not meet a level of English proficiency
                    consistent with English-language journals will be rejected.
                </Typography>
            ),
        },
        {
            title: 'Blinded Title Page',
            content: (
                <Typography variant="body1">
                    For all new submissions and revisions, the first page of the
                    manuscript should be a blinded title page (author(s) names
                    and affiliations should be removed).
                </Typography>
            ),
        },
        {
            title: 'Separate (Un-Blinded) Title Page',
            content: (
                <>
                    <Typography variant="body1">
                        The separate un-blinded title page should include:
                    </Typography>
                    <ul className={classes.list}>
                        <li>The name(s) of the author(s)</li>
                        <li>A concise and informative title </li>
                        <li>
                            The affiliation(s) and address(es) of the author(s)
                        </li>
                        <li>
                            The e-mail address, phone, and fax numbers of the
                            corresponding author
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: 'Abstract & Key Words',
            content: (
                <Typography variant="body1">
                    The abstract should be between 100-300 words. The abstract
                    should not contain any undefined abbreviations or
                    unspecified references. Please provide 4-6 keywords which
                    can be used for indexing purposes.
                </Typography>
            ),
        },
        {
            title: 'Main Text',
            content: (
                <>
                    <Typography variant="body1">
                        The text of the manuscript should begin on a new page
                        headed by the full title. Notes, references, tables,
                        figures, and appendices appear in separate sections
                        following the text, in that order.{' '}
                    </Typography>
                    <ul className={classes.list}>
                        <li>
                            Headings and Sub-Headings in the text indicate the
                            organization of content. As a general principle,
                            please do not use more than three levels of
                            displayed headings.{' '}
                        </li>
                        <li>
                            Abbreviations and Acronyms should be defined at
                            first mention and used consistently thereafter.
                        </li>
                        <li>
                            Citations: In the text should provide the last name
                            of the author(s) and the year of publication.
                            Include page numbers for direct quotes or specific
                            passages. Cite only those works needed to provide
                            evidence for your assertions and to refer to
                            important sources on the topic.
                        </li>
                    </ul>
                </>
            ),
        },
        {
            title: 'Endnotes',
            content: (
                <Typography variant="body1">
                    To the text are numbered consecutively; those to tables
                    should be indicated by superscript lower-case letters (or
                    asterisks for significance values and other statistical
                    data).
                </Typography>
            ),
        },
        {
            title: 'Equations',
            content: (
                <Typography variant="body1">
                    In equation text must be typed. Use consecutive Arabic
                    numerals in parentheses at the right margin to identify
                    important equations.
                </Typography>
            ),
        },
        {
            title: 'Acknowledgements (where applicable)',
            content: (
                <Typography variant="body1">
                    Acknowledgements of people, grants, funds, etc. should be
                    placed in a separate section before the reference list. The
                    names of funding organizations should be written in full,
                    and for the purposes of the blind peer review process,
                    acknowledgements should not violate the anonymity of the
                    author (i.e., avoid acknowledgments in the format of “Thank
                    you to my institution [x] and colleagues [name], [name]…).
                </Typography>
            ),
        },
        {
            title: 'References',
            content: (
                <Typography variant="body1">
                    All references must be in IEEE format only.
                </Typography>
            ),
        },
        {
            title: 'Tables',
            content: (
                <Typography variant="body1">
                    Number tables consecutively throughout the text. Insert a
                    note in the text to indicate the placement (e.g., “Table1
                    about here”). Type each table on a separate page. Each table
                    must include a descriptive title and headings for columns
                    and rows. Do not use abbreviations for variable names or
                    column and row headings within tables. Align numbers in
                    columns by decimal. Tables must be in an editable format.
                </Typography>
            ),
        },
        {
            title: 'Figures',
            content: (
                <Typography variant="body1">
                    Number figures consecutively throughout the text. Insert a
                    note in the text to indicate placement (e.g., “Figure1 about
                    here”). Each figure should include a title or caption, and
                    please make sure to identify all elements found in the
                    figure in the caption. Do not use abbreviations within
                    figures. Figures must be executed by computer or by graphic
                    artist. Figure parts should be denoted by lowercase letters.
                    All figures (including all type) must be legible when
                    reduced or enlarged to widths of 2-9/16 inches (one column
                    width) or 5-5/16 inches (full page width).
                </Typography>
            ),
        },
        {
            title: 'Permission',
            content: (
                <Typography variant="body1">
                    The author(s) are responsible for securing permission to
                    reproduce all copyrighted figures or materials before they
                    are published by this journal. A copy of the written
                    permission must be included with the manuscript submission.
                </Typography>
            ),
        },
    ];

    return (
        <Layout
            title="Guidelines For Author"
            description="Guidelines For Authors of Scientific Papers provided by JSS Journal of Scientific Studies"
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
                            GUIDELINES
                        </Typography>
                        <Divider />
                    </Grid>
                    <Typography variant="body1" style={{ padding: '10px' }}>
                        Authors are advised to follow the guidelines
                        inadvertently before submitting their research papers.
                    </Typography>
                    {data.map((item, index) => (
                        <Grid
                            item
                            xs={12}
                            key={index}
                            classes={{ root: classes.gridItem }}
                        >
                            <Typography
                                variant="h5"
                                gutterBottom
                                className={classes.title}
                            >
                                {item.title}
                            </Typography>
                            <Box className={classes.caption}>
                                {item.content}
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Layout>
    );
};

export default GuideLines;
