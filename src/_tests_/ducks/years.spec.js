import {
    setYears,
    yearsReducer,
} from '../../ducks/years';

const mockKey = 'mockValue';

describe('years Duck Tests', () => {
    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setYears should match the snapshot' , () => {
            expect(setYears(mockKey)).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(yearsReducer()).toEqual(10);
        });
        it('should return the passed state if called with no action' , () => {
            expect(yearsReducer(mockKey)).toEqual(mockKey);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(yearsReducer(mockKey, unknownAction)).toEqual(mockKey);
        });
        it('should return the value set' , () => {
            expect(yearsReducer('', setYears(mockKey))).toEqual(mockKey);
        });
    });
});