export const SET_YEARS = 'modules/app/SET_YEARS';

export const setYears = value => ({
    type: SET_YEARS,
    value,
});

export const yearsReducer = (state = 10, action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_YEARS:
            return action.value;
        default:
            return state;               
    }
};