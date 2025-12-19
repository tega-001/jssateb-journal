import { Box, Fade, Typography } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import React, { useState } from 'react';

const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'whitesmoke',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            transition: 'all 0.2s ease-out',
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

const SimpleAccordion = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Accordion
            square
            expanded={isExpanded}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
            >
                {isExpanded ? (
                    <ExpandMoreIcon color="primary" />
                ) : (
                    <KeyboardArrowRightIcon color="primary" />
                )}
                <Typography>{props.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Fade in={isExpanded} timeout={1000}>
                    <Box>{props.content}</Box>
                </Fade>
            </AccordionDetails>
        </Accordion>
    );
};

export default SimpleAccordion;
