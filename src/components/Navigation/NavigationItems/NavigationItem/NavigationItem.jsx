import { ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const useStyles = makeStyles(() => ({
    root: {
        width: 'auto',
        cursor: 'pointer',
    },
    active: {
        borderRadius: '3px',
        backgroundColor: '#cb9b40',
        color: 'black',
    },
}));

const NavigationItem = (props) => {
    const classes = useStyles();
    const router = useRouter();

    return (
        <Link href={props.link}>
            <ListItem
                classes={{ root: classes.root }}
                className={router.asPath === props.link ? classes.active : ''}
            >
                {props.children}
            </ListItem>
        </Link>
    );
};

export default NavigationItem;
