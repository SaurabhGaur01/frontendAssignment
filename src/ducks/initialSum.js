export const SET_INITIAL_SUM = 'modules/app/SET_INITIAL_SUM';

export const setInitialSum = value => ({
    type: SET_INITIAL_SUM,
    value,
});

export const initialSumReducer = (state = 10000, action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_INITIAL_SUM:
            return action.value;
        default:
            return state;               
    }
};