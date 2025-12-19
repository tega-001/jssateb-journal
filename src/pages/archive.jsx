import { Container, Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArchiveCard from '../components/UI/Card/ArchiveCard';
import Layout from '../hoc/Layout';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '74vh',
        [theme.breakpoints.down('md')]: {
            height: '79vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '58vh',
        },
    },
    grid: {
        margin: '20px 0px',
    },
    gridItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '15px 0px',
    },
    emptyGridItem: {
        height: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '15px 0px',
        [theme.breakpoints.down('xs')]: {
            height: '30vh',
        },
    },
    emptyText: {
        fontSize: '4.5rem',
        padding: '5px',
        color: '#e2e1e1',
        textTransform: 'uppercase',
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem',
        },
    },
    caption: {
        padding: '5px',
    },
}));

const Archive = () => {
    const classes = useStyles();

    const data = [
        {
            title: 'Vol 2 Issue 2',
            publicationDate: 'July - Jan 2024',
            totalPages: 98,
            description:
                'Second issue of the Volume 2 of the JSS Journal of Scientific Studies',
            link: 'https://drive.google.com/file/d/1LBof6OQsVWEr8i6btkRSxPgkffN2lTw2/view?usp=drive_link',
        },
        {
            title: 'Vol 2 Issue 1',
            publicationDate: 'Jan - Aug 2023',
            totalPages: 73,
            description:
                'First issue of the Volume 2 of the JSS Journal of Scientific Studies',
            link: 'https://drive.google.com/file/d/18FtBSu_CfhE2FcJ1FCA0Jo_yoS_JM8wo/view?usp=drive_link',
        },
        {
            title: 'Vol 1 Issue 2',
            publicationDate: 'Jul - Jan 2023',
            totalPages: 86,
            description:
                'Second issue of the Volume 1 of the JSS Journal of Scientific Studies',
            link: 'https://drive.google.com/file/d/1PDHno1VZWy95fljUyDpxoWyuvXKZLaLZ/view?usp=drivesdk',
        },
        {
            title: 'Vol 1 Issue 1',
            publicationDate: 'Jan - Jun 2022',
            totalPages: 108,
            description:
                'First issue of the Volume 1 of the JSS Journal of Scientific Studies',
            link: 'https://drive.google.com/file/d/1umoFKDcAvFAo3pHept7g2LxEOEVroGfb/view?usp=sharing',
        },
    ];

    return (
        <Layout
            title="Archives"
            description="Contains Previous Archive of JSS Journal of Scientific Studies"
        >
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
                            PAST ARCHIVE
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid container>
                        {data.length > 0 ? (
                            data.map((item, index) => (
                                <Grid
                                    lg={3}
                                    md={4}
                                    sm={6}
                                    xs={12}
                                    item
                                    key={index}
                                    classes={{ root: classes.gridItem }}
                                >
                                    <ArchiveCard key={index} item={item} />
                                </Grid>
                            ))
                        ) : (
                            <Grid
                                item
                                xs={12}
                                classes={{ root: classes.emptyGridItem }}
                            >
                                <Typography
                                    className={classes.emptyText}
                                    gutterBottom
                                >
                                    No Archives Found
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Archive;
