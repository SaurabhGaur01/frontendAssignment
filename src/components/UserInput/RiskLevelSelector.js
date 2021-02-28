import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { setRiskLevel } from '../../ducks/riskLevel';

const maxRiskLevel = 25;
const defaultRisk = 10;

const RiskLevelSelector = ({
    actionSetRiskLevel, 
}) => {
    const onChange = (event) => {
        var inputRiskLevel = parseInt(event.target.value);
        actionSetRiskLevel(inputRiskLevel);
    }

    const options = [];
    for(let k=1; k<=maxRiskLevel; ++k) {
        options.push(
            <option key={k} value={k}>{k}</option>
        );
    }

    return (
        <div>
            Risk level:
            <select id="riskLevel" className="riskLevel" onChange={onChange} defaultValue={defaultRisk}>
                {options}
            </select>
        </div>
    );
}

RiskLevelSelector.propTypes = {
    actionSetRiskLevel: PropTypes.func.isRequired,
};

const mapDispatchAsProps = {
    actionSetRiskLevel: setRiskLevel,
}

const hocChain = compose(
    connect(null, mapDispatchAsProps),
);

export { RiskLevelSelector as TestableRiskLevelSelector };

export default hocChain(RiskLevelSelector);
