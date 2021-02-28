import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setMonthlySum } from '../../ducks/monthlySum';

const useStyles = makeStyles({
    inputWidth: {
      width: '45px',
    },
});

const MonthlySum = ({
    actionSetMonthlySum,
    monthlySum, 
}) => {
    const classes = useStyles();
    const onChange = (event) => {
        var inputMonthlySum = parseInt(event.target.value);
        actionSetMonthlySum(inputMonthlySum);
    }

    return (
        <div>
            Monthly Sum:
            <input type="text" id="monthlySum" name="monthlySum" defaultValue={monthlySum} onChange={onChange} className={classes.inputWidth} />
        </div>
    );
}

MonthlySum.propTypes = {
    actionSetMonthlySum: PropTypes.func.isRequired,
    monthlySum: PropTypes.number.isRequired,
};

const mapDispatchAsProps = {
    actionSetMonthlySum: setMonthlySum,
}

export const mapStateToProps = state => ({
    monthlySum: state.monthlySum,
});

const hocChain = compose(
    connect(mapStateToProps, mapDispatchAsProps),
);

export { MonthlySum as TestableMonthlySum };

export default hocChain(MonthlySum);
