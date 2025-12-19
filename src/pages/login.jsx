import { Container, Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import LoginCard from '../components/UI/Card/LoginCard';
import Layout from '../hoc/Layout';

const useStyles = makeStyles(() => ({
    grid: {
        margin: '10px 0px',
    },
    gridItem: {
        margin: '15px 0px',
        padding: '7px 0px',
    },
    caption: {
        padding: '5px',
    },
}));

const defaultValues = {
    email: '',
    password: '',
};

const login = () => {
    const classes = useStyles();
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({ defaultValues });

    const submitHandler = (data) => {
        if (data.password.length < 8) {
            setError('password', {
                type: 'manual',
                message: 'Password must be at least 8 characters',
            });
        } else {
            console.log(data);
        }
    };

    return (
        <Layout
            title="Login"
            description="Login Page of JSS Journal of Scientific Studies"
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
                            LOGIN
                        </Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <LoginCard
                            control={control}
                            errors={errors}
                            onSubmit={handleSubmit(submitHandler)}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default login;
