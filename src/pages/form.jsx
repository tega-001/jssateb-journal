import {
    Button,
    Container,
    Divider,
    Grid,
    InputLabel,
    Paper,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import Input from '../components/UI/Input/Input';
import Layout from '../hoc/Layout';

const useStyles = makeStyles((theme) => ({
    grid: {
        margin: '20px 0px',
    },
    caption: {
        padding: '5px',
    },
    paper: {
        padding: '25px',
    },
    error: {
        color: theme.palette.primary.main,
    },
    btn: {
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
}));

const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    organization: '',
    title: '',
    branch: 'CSE',
    areaOfResearch: '',
    articleType: 'Research Article',
    keywords: '',
    abstract: '',
    gender: 'Female',
    file: undefined,
};

const branches = [
    {
        title: 'Computer Science Engineering',
        value: 'CSE',
    },
    {
        title: 'Information Science Engineering',
        value: 'ISE',
    },
    {
        title: 'Electronics and Communication Engineering',
        value: 'ECE',
    },
    {
        title: 'Electronics and Instrumentation Engineering',
        value: 'EIE',
    },
    {
        title: 'Mechanical Engineering',
        value: 'ME',
    },
    {
        title: 'Civil Engineering',
        value: 'CE',
    },
    {
        title: 'Industrial Engineering Management',
        value: 'IEM',
    },
];

const articleTypes = [
    {
        title: 'Research Article',
        value: 'Research Article',
    },
    {
        title: 'Review Article',
        value: 'Review Article',
    },
    {
        title: 'Short Communication',
        value: 'Short Communication',
    },
    {
        title: 'Case Study',
        value: 'Case Study',
    },
    {
        title: 'Other',
        value: 'Other',
    },
];

const form = () => {
    const classes = useStyles();
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({ defaultValues });

    const submitHandler = (data) => {
        if (data.firstName.length < 3) {
            setError('firstName', {
                type: 'manual',
                message: 'First name must be at least 3 characters',
            });
        } else if (data.lastName.length > 3) {
            setError('lastName', {
                type: 'manual',
                message: 'Last name must be at least 3 characters',
            });
        } else if (data.phoneNumber.length != 10) {
            setError('phoneNumber', {
                type: 'manual',
                message: 'Enter a correct Phone Number',
            });
        } else if (data.file == null || data.file?.length < 1) {
            setError('file', {
                type: 'manual',
                message: 'Upload a file',
            });
        } else if (data.title.length < 5) {
            setError('title', {
                type: 'manual',
                message: 'Title must be at least 5 characters',
            });
        } else if (data.areaOfResearch.length < 5) {
            setError('areaOfResearch', {
                type: 'manual',
                message: 'Area of Research must be at least 5 characters',
            });
        } else if (data.keywords.split(',').length < 2) {
            setError('keywords', {
                type: 'manual',
                message: 'There must be at least two Keywords',
            });
        } else if (data.abstract.length < 10) {
            setError('abstract', {
                type: 'manual',
                message: 'Abstract must be at least 10 characters',
            });
        } else {
            console.log(data);
        }
    };
    return (
        <Layout title="Form" description="Form to submit Journal Paper">
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
                            FORM DETAILS
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper} elevation={3}>
                            <form onSubmit={handleSubmit(submitHandler)}>
                                <Grid container spacing={1}>
                                    {/*Personal Details*/}
                                    <Grid item xs={12}>
                                        <Typography variant="h5">
                                            PERSONAL DETAILS
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Input
                                            control={control}
                                            name="firstName"
                                            label="FirstName"
                                            elementType="TextField"
                                            type="text"
                                            error={errors.firstName}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Input
                                            control={control}
                                            name="lastName"
                                            label="LastName"
                                            elementType="TextField"
                                            type="text"
                                            error={errors.lastName}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Input
                                            control={control}
                                            name="email"
                                            label="Email"
                                            elementType="TextField"
                                            type="email"
                                            error={errors.email}
                                        />
                                        <Input
                                            control={control}
                                            name="phoneNumber"
                                            label="Phone Number"
                                            elementType="TextField"
                                            type="number"
                                            error={errors.phoneNumber}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Input
                                            control={control}
                                            name="organization"
                                            label="Organization"
                                            elementType="TextField"
                                            type="text"
                                            error={errors.organization}
                                        />
                                        <Input
                                            control={control}
                                            elementType="RadioGroup"
                                            name="gender"
                                        />
                                    </Grid>
                                    {/*Journal Details*/}
                                    <Grid item xs={12}>
                                        <Typography variant="h5">
                                            JOURNAL DETAILS
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Input
                                            control={control}
                                            name="title"
                                            label="Manuscript Title"
                                            elementType="TextField"
                                            type="text"
                                            error={errors.title}
                                        />
                                        <Input
                                            control={control}
                                            name="branch"
                                            label="Branch"
                                            elementType="Dropdown"
                                            type="text"
                                            error={errors.branch}
                                            options={branches}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Input
                                            control={control}
                                            name="areaOfResearch"
                                            label="Area Of Research"
                                            elementType="TextField"
                                            type="text"
                                            error={errors.areaOfResearch}
                                        />
                                        <Input
                                            control={control}
                                            name="articleType"
                                            label="Article Type"
                                            elementType="Dropdown"
                                            type="text"
                                            error={errors.articleType}
                                            options={articleTypes}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <InputLabel>
                                            Keywords (Please submit comma
                                            &quot;,&quot; seperated keywords)
                                        </InputLabel>
                                        <Input
                                            control={control}
                                            name="keywords"
                                            label="Keywords"
                                            elementType="TextField"
                                            type="text"
                                            error={errors.keywords}
                                        />
                                        <Input
                                            control={control}
                                            name="abstract"
                                            label="Abstract"
                                            elementType="MultiLine"
                                            type="text"
                                            error={errors.abstract}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Input
                                            type="file"
                                            name="file"
                                            control={control}
                                            elementType="UploadFile"
                                            error={errors.file}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                    className={classes.btn}
                                >
                                    Submit
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default form;
