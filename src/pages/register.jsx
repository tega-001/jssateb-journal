import {
    Button,
    Container,
    Divider,
    Grid,
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
    address: '',
    city: '',
    state: '',
    country: '',
    password: '',
    confirmPassword: '',
    gender: 'Female',
};

const Register = () => {
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
        } else if (data.password.length < 8) {
            setError('password', {
                type: 'manual',
                message: 'Password must be at least 8 characters',
            });
        } else if (data.password !== data.confirmPassword) {
            setError('confirmPassword', {
                type: 'manual',
                message: 'Passwords do not match',
            });
        } else {
            console.log(data);
        }
    };

    return (
        <Layout
            title="Register"
            description="Registration page of JSS Journal of Scientific Studies"
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
                            REGISTER
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
                                        <Input
                                            control={control}
                                            name="organization"
                                            label="Organization"
                                            elementType="TextField"
                                            type="text"
                                            error={errors.organization}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Input
                                            control={control}
                                            name="address"
                                            label="Permanent Address"
                                            elementType="MultiLine"
                                            type="text"
                                            error={errors.address}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Input
                                            control={control}
                                            name="city"
                                            label="City"
                                            elementType="TextField"
                                            type="text"
                                            error={errors.city}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Input
                                            control={control}
                                            name="state"
                                            label="State"
                                            elementType="TextField"
                                            type="text"
                                            error={errors.state}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Input
                                            control={control}
                                            name="country"
                                            label="Country"
                                            elementType="TextField"
                                            type="text"
                                            error={errors.country}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Input
                                            control={control}
                                            name="password"
                                            label="Password"
                                            elementType="TextField"
                                            type="password"
                                            error={errors.password}
                                        />
                                        <Input
                                            control={control}
                                            name="confirmPassword"
                                            label="Confirm Password"
                                            elementType="TextField"
                                            type="password"
                                            error={errors.confirmPassword}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Input
                                            control={control}
                                            elementType="RadioGroup"
                                            name="gender"
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    type="submit"
                                    className={classes.btn}
                                >
                                    Register
                                </Button>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Register;
