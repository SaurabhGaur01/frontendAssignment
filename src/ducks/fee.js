export const SET_FEE = 'modules/app/SET_FEE';

export const setFee = value => ({
    type: SET_FEE,
    value,
});

export const feeReducer = (state = 0.01, action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_FEE:
            return action.value;
        default:
            return state;               
    }
};