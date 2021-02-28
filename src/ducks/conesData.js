export const SET_CONES_DATA = 'modules/app/SET_CONES_DATA';

export const setConesData = data => ({
    type: SET_CONES_DATA,
    data,
});

export const conesDataReducer = (state = [], action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_CONES_DATA:
            return action.data;
        default:
            return state;               
    }
};