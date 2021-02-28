import { combineReducers } from 'redux';
import { conesDataReducer as conesData } from '../ducks/conesData';
import { riskLevelReducer as riskLevel } from '../ducks/riskLevel';
import { initialSumReducer as initialSum } from '../ducks/initialSum';
import { yearsReducer as years } from '../ducks/years';
import { monthlySumReducer as monthlySum  } from '../ducks/monthlySum';
import { feeReducer as fee  } from '../ducks/fee';

export default combineReducers({
    conesData,
    riskLevel,
    initialSum,
    years,
    monthlySum,
    fee,
})