import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { CollegeLogo, JournalLogo } from '../../UI/Logo';
import { navData } from '../navigationElements';
import NavigationItem from './NavigationItem/NavigationItem';

const useStyles = makeStyles(() => ({
    List: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

const NavigationItems = () => {
    const classes = useStyles();
    return (
        <>
            <JournalLogo />
            <List className={classes.List}>
                {navData.map((navItem) => (
                    <NavigationItem key={navItem.link} link={navItem.link}>
                        {navItem.title}
                    </NavigationItem>
                ))}
            </List>
            <CollegeLogo />
        </>
    );
};

export default NavigationItems;
