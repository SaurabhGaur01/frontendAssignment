import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import RiskLevelSelector from '../UserInput/RiskLevelSelector';
import InitialSum from '../UserInput/InitialSum';
import MonthlySum from '../UserInput/MonthlySum';
import Years from '../UserInput/Years';
import Fee from '../UserInput/Fee';

// Using react material utility to apply classes
const useStyles = makeStyles({
    containerHead: {
      display: 'flex',
    },
    filterClass: {
        marginLeft: '50px',
        paddingTop: '15px',
    }
});

/*
    This component will be used to create header part on UI -
    a) Tabs heading
    b) User filter - Dropdowns & Textbox
*/
const TabHeader = ({ handleChange, value }) => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <div className={classes.containerHead}>
                <div className="tabs">
                    <Tabs value={value} onChange={handleChange} aria-label="tabs">
                        <Tab label="Table" id = "tab-1" />
                        <Tab label="Chart" id = "tab-2" />
                    </Tabs>
                </div>
                <div className={classes.filterClass}>
                    <RiskLevelSelector />
                </div>
                <div className={classes.filterClass}>
                    <InitialSum />
                </div>
                <div className={classes.filterClass}>
                    <MonthlySum />
                </div>
                <div className={classes.filterClass}>
                    <Years />
                </div>
                <div className={classes.filterClass}>
                    <Fee />
                </div>
            </div>    
        </AppBar>
    )
}    

TabHeader.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
}

export default TabHeader;