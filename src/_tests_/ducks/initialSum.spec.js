import {
    setInitialSum,
    initialSumReducer,
} from '../../ducks/initialSum';

const mockKey = 'mockValue';
 
describe('initialSum Duck Tests', () => {
    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setInitialSum should match the snapshot' , () => {
            expect(setInitialSum(mockKey)).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(initialSumReducer()).toEqual(10000);
        });
        it('should return the passed state if called with no action' , () => {
            expect(initialSumReducer(mockKey)).toEqual(mockKey);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(initialSumReducer(mockKey, unknownAction)).toEqual(mockKey);
        });
        it('should return the value called with' , () => {
            expect(initialSumReducer('', setInitialSum(mockKey))).toEqual(mockKey);
        });
    });
});