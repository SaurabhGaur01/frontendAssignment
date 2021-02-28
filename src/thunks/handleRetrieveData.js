import { setConesData } from '../ducks/conesData';

const API_URL = 'http://localhost:3000/api/cones';

// This function is used for making an API call and storing the response in redux store
const handleRetrieveData = () => {
    return async (dispatch) => {
        await fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            dispatch(setConesData(data));
        });
    } 
}

export default handleRetrieveData;