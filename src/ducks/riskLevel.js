export const SET_RISK_LEVEL = 'modules/app/SET_RISK_LEVEL';

export const setRiskLevel = value => ({
    type: SET_RISK_LEVEL,
    value,
});

export const riskLevelReducer = (state = 3, action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_RISK_LEVEL:
            return action.value;
        default:
            return state;               
    }
};