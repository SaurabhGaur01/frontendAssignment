export const SET_MONTHLY_SUM = 'modules/app/SET_MONTHLY_SUM';

export const setMonthlySum = value => ({
    type: SET_MONTHLY_SUM,
    value,
});

export const monthlySumReducer = (state = 200, action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_MONTHLY_SUM:
            return action.value;
        default:
            return state;               
    }
};