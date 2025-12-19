import { Box, Button, Modal, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

//Remove Button Component later

const useStyles = makeStyles((theme) => ({
    box: {
        position: 'absolute',
        top: '50%',
        textAlign: 'center',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(3, 5, 4),
    },
}));

const BasicModal = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const body = (
        <Box className={classes.box}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
                Error Message
            </Typography>
            <Typography id="modal-modal-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
        </Box>
    );

    return (
        <>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {body}
            </Modal>
        </>
    );
};
export default BasicModal;
