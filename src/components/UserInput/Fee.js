import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setFee } from '../../ducks/fee';

const useStyles = makeStyles({
    inputWidth: {
      width: '45px',
    },
});

const Fee = ({
    actionSetFee,
    fee, 
}) => {
    const classes = useStyles();
    const onChange = (event) => {
        var inputFee = parseInt(event.target.value);
        actionSetFee(inputFee);
    }

    return (
        <div>
            Fee:
            <input id= "fee" type="text" name="fee" defaultValue={fee} onChange={onChange} className={classes.inputWidth} />
        </div>
    );
}

Fee.propTypes = {
    actionSetFee: PropTypes.func.isRequired,
    fee: PropTypes.number.isRequired,
};

const mapDispatchAsProps = {
    actionSetFee: setFee,
}

export const mapStateToProps = state => ({
    fee: state.fee,
});

const hocChain = compose(
    connect(mapStateToProps, mapDispatchAsProps),
);

export { Fee as TestableFee };

export default hocChain(Fee);
