import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        border: '1px solid #cecece',
        borderLeft: '0.8px solid #cecece',
        borderRight: '0.8px solid #cecece',
    },
}))(TableCell);

const StyledTableInnerCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        border: '0.2px solid #cecece',
    },
}))(TableCell);

const StyledTableSecondaryCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        border: 'none',
        padding: '0px',
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const StyledTableInnerRow = withStyles({
    root: {
        backgroundColor: 'inherit',
    },
})(TableRow);

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '25px 0px',
    },
    table: {
        minWidth: 675,
    },
    button: {
        width: '105%',
        textTransform: 'inherit',
        [theme.breakpoints.down('md')]: {
            fontSize: '0.7rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.5rem',
        },
    },
    CellHeading: {
        fontWeight: 700,
        color: 'rgba(0, 0, 0, 0.54)',
    },
    CellTypography: {
        fontSize: '1rem',
    },
    CellTitle: {
        fontWeight: 600,
        fontSize: '1.1rem',
    },
}));

const CurrentTable = ({ data, headings }) => {
    const classes = useStyles();

    const openLink = (url) => window.open(url, '_blank');

    return (
        <TableContainer component={Paper} className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headings.map((item, index) => (
                            <StyledTableCell align={item.align} key={index}>
                                <Typography>{item.heading}</Typography>
                            </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, index) => (
                        <StyledTableRow key={item.title}>
                            <StyledTableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                {index + 1}.
                            </StyledTableCell>
                            <StyledTableSecondaryCell>
                                <StyledTableInnerRow>
                                    <StyledTableInnerCell>
                                        <Typography
                                            className={classes.CellHeading}
                                        >
                                            Authors:
                                        </Typography>
                                    </StyledTableInnerCell>
                                    <StyledTableInnerCell
                                        style={{ width: '100%' }}
                                    >
                                        <Typography
                                            className={classes.CellTypography}
                                        >
                                            {item.authors}
                                        </Typography>
                                    </StyledTableInnerCell>
                                </StyledTableInnerRow>
                                <StyledTableInnerRow>
                                    <StyledTableInnerCell>
                                        <Typography
                                            className={classes.CellHeading}
                                        >
                                            Page Title:
                                        </Typography>
                                    </StyledTableInnerCell>
                                    <StyledTableInnerCell
                                        style={{ width: '100%' }}
                                    >
                                        <Typography
                                            className={classes.CellTitle}
                                        >
                                            {item.title}
                                        </Typography>
                                    </StyledTableInnerCell>
                                </StyledTableInnerRow>
                            </StyledTableSecondaryCell>
                            <StyledTableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                {item.page}
                            </StyledTableCell>
                            <StyledTableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                <Button
                                    color="primary"
                                    variant="contained"
                                    className={classes.button}
                                    onClick={() => openLink(item.link)}
                                >
                                    Full Text
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CurrentTable;
