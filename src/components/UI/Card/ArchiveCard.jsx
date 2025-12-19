import { Box, CardHeader } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

/*Transitions should be added If Required */
{
    /*Change Scale and Color of Hover ??*/
}
const useStyles = makeStyles((theme) => ({
    root: {
        width: 275,
        height: '30vh',
        cursor: 'pointer',
        overflow: 'hidden',
        display: 'block',
        position: 'relative',
        zIndex: '0',
        '&::before': {
            content: '""',
            position: 'absolute',
            zIndex: '-1',
            bottom: '-16px',
            right: '-16px',
            background: '#78100de0',
            height: '42px',
            width: '42px',
            borderRadius: '32px',
            transform: 'scale(1)',
            transformOrigin: '50% 50%',
            transition: 'transform 0.25s ease-out',
        },
        [theme.breakpoints.down('sm')]: {
            width: 225,
            height: '23vh',
        },
        '&:hover::before': {
            transform: 'scale(21)',
        },
        '& .CardHeader': {
            width: '100%',
            height: '100%',
            transition: '0.5s',
            textAlign: 'center',
        },
        '&:hover .CardHeader': {
            height: '30%',
            transition: 'all 0.3s ease-out',
            color: 'white',
        },
        '& .CardContent': {
            height: '0px',
            overflow: 'hidden',
            textAlign: 'left',
            opacity: 0,
        },
        '&:hover .CardContent': {
            height: '60%',
            opacity: 1,
            transition: 'all 0.3s ease-out',
            color: 'white',
        },
    },
    text: {
        textDecoration: 'none',
    },
}));

const ArchiveCard = ({ item }) => {
    const classes = useStyles();

    return (
        <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.text}
        >
            <Card className={classes.root} variant="outlined">
                <CardHeader title={item.title} className="CardHeader" />
                <CardContent className="CardContent">
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        marginBottom="12px"
                    >
                        <Typography gutterBottom>
                            Publication Date:
                            <br /> {item.publicationDate}
                        </Typography>
                        <Typography gutterBottom>
                            Pages: {item.totalPages}
                        </Typography>
                    </Box>
                    <Typography variant="body2" component="p">
                        {item.description}
                    </Typography>
                </CardContent>
            </Card>
        </a>
    );
};

export default ArchiveCard;
