import {
    setMonthlySum,
    monthlySumReducer,
} from '../../ducks/monthlySum';

const mockKey = 'mockValue';

describe('monthlySum Duck Tests', () => {
    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setMonthlySum should match the snapshot' , () => {
            expect(setMonthlySum(mockKey)).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(monthlySumReducer()).toEqual(200);
        });
        it('should return the passed state if called with no action' , () => {
            expect(monthlySumReducer(mockKey)).toEqual(mockKey);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(monthlySumReducer(mockKey, unknownAction)).toEqual(mockKey);
        });
        it('should return the value set' , () => {
            expect(monthlySumReducer('', setMonthlySum(mockKey))).toEqual(mockKey);
        });
    });
});