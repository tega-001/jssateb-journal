import {
    Avatar,
    Badge,
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Paper,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../components/UI/Input/Input';
import Layout from '../hoc/Layout';

//TODO: Save Changes Logic && Add More info fields in register && Divide ImageBox to two SeparateBoxes and reduce height

const useStyles = makeStyles((theme) => ({
    grid: {
        margin: '20px 0px',
    },
    caption: {
        padding: '5px',
    },
    avatar: {
        width: '125px',
        height: '125px',
        fontSize: '3.5rem',
        backgroundColor: '#78100D',
        margin: '10px',
    },
    innerGrid: {
        backgroundColor: '#f1f1f1',
        borderRadius: '10px',
        margin: '5px 0px',
        padding: '10px',
    },
    imageBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '87vh',
        justifyContent: 'center',
        margin: '10px',
        [theme.breakpoints.down('xs')]: {
            height: '40vh',
        },
    },
    badge: {
        '& .MuiBadge-badge': {
            backgroundColor: '#CB9B40',
            color: '#000',
            margin: '5px',
        },
    },
    descGrid: {
        marginTop: '10px',
        marginBottom: '15px',
        padding: '5px',
    },
}));

const defaultValues = {
    firstName: 'Susan',
    lastName: 'S',
    email: 'Susan24@gmail.com',
    phoneNumber: '9828611702',
    organization: 'Jssateb',
    address:
        'JSSATE-B Campus, Dr.Vishnuvardhan Rd Uttarahalli-Kengeri Main Road, JSS Campus Rd, Srinivaspura',
    city: 'Bengaluru',
    state: 'Karnataka',
    country: 'India',
};

const Profile = () => {
    const classes = useStyles();
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({ defaultValues });

    const [disabled, setDisabled] = useState(true);

    const updateAccountHandler = () => {
        setDisabled(false);
    };

    const returnHandler = () => {
        setDisabled(true);
    };

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
        } else {
            console.log(data);
        }
    };

    return (
        <Layout title="Profile">
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
                            PROFILE
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid
                            container
                            spacing={1}
                            className={classes.innerGrid}
                        >
                            <Grid item xs={12} sm={5} md={3}>
                                <Box
                                    component={Paper}
                                    elevation={4}
                                    className={classes.imageBox}
                                >
                                    <Badge
                                        className={classes.badge}
                                        overlap="circular"
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        badgeContent="ADMIN"
                                    >
                                        <Avatar className={classes.avatar}>
                                            S
                                        </Avatar>
                                    </Badge>
                                    <Typography variant="h4">
                                        Susan S
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        variant="subtitle1"
                                    >
                                        Bengaluru
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        variant="subtitle1"
                                    >
                                        Front-End Web Developer
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={7} md={9}>
                                <form onSubmit={handleSubmit(submitHandler)}>
                                    <Grid
                                        container
                                        spacing={1}
                                        className={classes.descGrid}
                                    >
                                        <Grid item xs={12}>
                                            <Typography variant="h5">
                                                Account Details
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
                                                disabled={disabled}
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
                                                disabled={disabled}
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
                                                disabled={disabled}
                                            />
                                            <Input
                                                control={control}
                                                name="organization"
                                                label="Organization"
                                                elementType="TextField"
                                                type="text"
                                                error={errors.organization}
                                                disabled={disabled}
                                            />
                                            <Input
                                                control={control}
                                                name="phoneNumber"
                                                label="Phone Number"
                                                elementType="TextField"
                                                type="number"
                                                error={errors.phoneNumber}
                                                disabled={disabled}
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
                                                disabled={disabled}
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
                                                disabled={disabled}
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
                                                disabled={disabled}
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
                                                disabled={disabled}
                                            />
                                        </Grid>
                                    </Grid>
                                    {disabled ? (
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            type="submit"
                                            onClick={updateAccountHandler}
                                        >
                                            Update Account
                                        </Button>
                                    ) : (
                                        <>
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                type="submit"
                                                style={{ marginRight: '10px' }}
                                            >
                                                Save Changes
                                            </Button>
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                type="submit"
                                                style={{ marginLeft: '10px' }}
                                                onClick={returnHandler}
                                            >
                                                Return
                                            </Button>
                                        </>
                                    )}
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Profile;
