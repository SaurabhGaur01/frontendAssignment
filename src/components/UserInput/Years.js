import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setYears } from '../../ducks/years';

const useStyles = makeStyles({
    inputWidth: {
      width: '45px',
    },
});

const Years = ({
    actionSetYears,
    years, 
}) => {
    const classes = useStyles();
    const onChange = (event) => {
        var inputYears = parseInt(event.target.value);
        actionSetYears(inputYears);
    }

    return (
        <div>
            Years:
            <input type="text" id="years" name="years" defaultValue={years} onChange={onChange} className={classes.inputWidth} />
        </div>
    );
}

Years.propTypes = {
    actionSetYears: PropTypes.func.isRequired,
    years: PropTypes.number.isRequired,
};

const mapDispatchAsProps = {
    actionSetYears: setYears,
}

export const mapStateToProps = state => ({
    years: state.years,
});

const hocChain = compose(
    connect(mapStateToProps, mapDispatchAsProps),
);

export { Years as TestableYears };

export default hocChain(Years);
