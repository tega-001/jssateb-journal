import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '25vh',
        padding: '10px',
        display: 'flex',
        margin: '5px',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            height: 'auto',
        },
        [theme.breakpoints.down('xs')]: {
            height: 'auto',
            margin: '10px 0px',
            padding: '5px',
            display: 'flex',
            flexDirection: 'column-reverse',
            textAlign: 'center',
            justifyContent: 'center',
        },
    },
    content: {
        [theme.breakpoints.down('xs')]: {
            padding: '10px',
        },
    },
    avatar: {
        height: '65px',
        width: '60px',
        margin: '15px 30px',
        backgroundColor: theme.palette.primary.main,
    },
    image: {
        maxWidth: '100%',
        backgroundSize: 'auto',
    },
    link: {
        color: theme.palette.primary.main,
    },
}));

const EditorsCard = ({ editor, style }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} style={style} elevation={3}>
            <CardContent className={classes.content}>
                <Typography variant="h5" gutterBottom>
                    {editor.name}
                </Typography>
                <Typography color="textSecondary">{editor.position}</Typography>
                <Typography color="textSecondary">
                    {editor.department}
                </Typography>
                {editor.email.split(',').map((email) => (
                    <a
                        href={`mailto:${email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.link}
                        key={email}
                    >
                        <Typography>{email}</Typography>
                    </a>
                ))}
            </CardContent>
            <Avatar className={classes.avatar}>
                {editor.imageUrl.length > 0 ? (
                    <img
                        className={classes.image}
                        src={editor.imageUrl}
                        alt="Editor's image"
                    />
                ) : (
                    editor.name[0]
                )}
            </Avatar>
        </Card>
    );
};

export default EditorsCard;
