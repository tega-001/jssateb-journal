import {
    Container,
    Divider,
    Grid,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    Cancel,
    CheckCircle,
    Description,
    FindInPage,
    HourglassFull,
} from '@material-ui/icons';
import StatusCard from '../components/UI/Card/StatusCard';
import Layout from '../hoc/Layout';

// BackgroundColor or Paper background ??

const useStyles = makeStyles(() => ({
    root: {},
    grid: {
        margin: '20px 0px',
    },
    caption: {
        padding: '5px',
    },
    list: {
        display: 'flex',
    },
    innerGrid: {
        padding: '20px',
        borderRadius: '10px',
        // backgroundColor: '#f1f1f1',
    },
    cardGrid: {
        display: 'flex',
    },
}));

const Status = () => {
    const classes = useStyles();

    const data = [
        {
            title: 'Android Mobile Based Voting System through Facial Recognition',
            authors: ['Evert A. Lindquist', 'Michael Buttazzoni'],
            startPage: 212,
            endPage: 227,
            publishedDate: '13 Jul 2021',
            status: 'Accepted',
        },
        {
            title: 'Android Mobile Based Voting System through Facial Recognition',
            authors: ['Evert A. Lindquist', 'Michael Buttazzoni'],
            startPage: 212,
            endPage: 227,
            publishedDate: '13 Jul 2021',
            status: 'Rejected',
        },
        {
            title: 'Android Mobile Based Voting System through Facial Recognition',
            authors: ['Evert A. Lindquist', 'Michael Buttazzoni'],
            startPage: 212,
            endPage: 227,
            publishedDate: '13 Jul 2021',
            status: 'Review',
        },
        {
            title: 'Android Mobile Based Voting System through Facial Recognition',
            authors: ['Evert A. Lindquist', 'Michael Buttazzoni'],
            startPage: 212,
            endPage: 227,
            publishedDate: '13 Jul 2021',
            status: 'Submitted',
        },
        {
            title: 'Android Mobile Based Voting System through Facial Recognition',
            authors: ['Evert A. Lindquist', 'Michael Buttazzoni'],
            startPage: 212,
            endPage: 227,
            publishedDate: '13 Jul 2021',
            status: 'Pending',
        },
    ];

    return (
        <Layout title="Status" description="">
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
                            JOURNAL STATUS
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid
                            container
                            className={classes.innerGrid}
                            component={Paper}
                        >
                            <Grid item xs={12}>
                                <Typography
                                    variant="h5"
                                    style={{
                                        padding: '5px 10px',
                                        margin: '3px',
                                    }}
                                >
                                    Status Indicators -
                                </Typography>
                            </Grid>
                            <Grid item sm={6} md={4} lg={2}>
                                <ListItem>
                                    <ListItemIcon>
                                        <Description
                                            style={{ color: '#1F2937' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Submitted" />
                                </ListItem>
                            </Grid>
                            <Grid item sm={6} md={4} lg={2}>
                                <ListItem>
                                    <ListItemIcon>
                                        <CheckCircle
                                            style={{ color: '#059669' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Accecpted" />
                                </ListItem>
                            </Grid>
                            <Grid item sm={6} md={4} lg={2}>
                                <ListItem>
                                    <ListItemIcon>
                                        <Cancel style={{ color: '#DC2626' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Rejected" />
                                </ListItem>
                            </Grid>
                            <Grid item sm={6} md={4} lg={2}>
                                <ListItem>
                                    <ListItemIcon>
                                        <FindInPage
                                            style={{ color: '#2563EB' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Under Review" />
                                </ListItem>
                            </Grid>
                            <Grid item sm={6} md={4} lg={2}>
                                <ListItem>
                                    <ListItemIcon>
                                        <HourglassFull
                                            style={{ color: '#D97706' }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText primary="Pending" />
                                </ListItem>
                            </Grid>

                            <Grid container className={classes.cardGrid}>
                                {data.map((item, index) => (
                                    <Grid item xs={12} key={index}>
                                        <StatusCard key={index} item={item} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Status;
