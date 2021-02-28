import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setInitialSum } from '../../ducks/initialSum';

const useStyles = makeStyles({
    inputWidth: {
      width: '45px',
    },
});

const InitialSum = ({
    actionSetInitialSum,
    initialSum, 
}) => {
    const classes = useStyles();
    const onChange = (event) => {
        var inputInitialSum = parseInt(event.target.value);
        actionSetInitialSum(inputInitialSum);
    }

    return (
        <div>
            Initial Sum:
            <input id= "initialSum" type="text" name="initialSum" defaultValue={initialSum} onChange={onChange} className={classes.inputWidth} />
        </div>
    );
}

InitialSum.propTypes = {
    actionSetInitialSum: PropTypes.func.isRequired,
    initialSum: PropTypes.number.isRequired,
};

const mapDispatchAsProps = {
    actionSetInitialSum: setInitialSum,
}

export const mapStateToProps = state => ({
    initialSum: state.initialSum,
});

const hocChain = compose(
    connect(mapStateToProps, mapDispatchAsProps),
);

export { InitialSum as TestableInitialSum };

export default hocChain(InitialSum);
