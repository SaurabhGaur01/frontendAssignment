import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import TableComponent from './Table/Table';
import Chart from './Chart/Chart';
import TabPanel from './Tabs/TabPanel';
import TabHeader from './Tabs/TabHeader';
import handleRetrieveData from '../thunks/handleRetrieveData';

const App = ({ actionHandleRetrieveData }) => {
    /* 
    Below action will be dispatched before component renders and make an API call,
    store the response in redux store
    */
    React.useEffect(() => {
        actionHandleRetrieveData();
    }, []);

    // Using hook for tab switch purpose
    const [tabValue, setTabValue] = React.useState(0);
    return (
        <React.Fragment>
            <TabHeader value={tabValue} handleChange={(event, newValue)=>{setTabValue(newValue)}} />
            <TabPanel value={tabValue} index={0}>
                <TableComponent />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <Chart />
            </TabPanel>
        </React.Fragment>       
    );
}

App.propTypes = {
    actionHandleRetrieveData: PropTypes.func.isRequired,
};

// Getting action from redux store for dispatching 
const mapDispatchAsProps = {
    actionHandleRetrieveData: handleRetrieveData,
}

const hocChain = compose(
    connect(null, mapDispatchAsProps),
);

export { App as TestableApp };

export default hocChain(App);