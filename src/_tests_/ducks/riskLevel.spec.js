import {
    setRiskLevel,
    riskLevelReducer,
} from '../../ducks/riskLevel';

const mockKey = 'mockValue';

describe('riskLevel Duck Tests', () => {
    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setRiskLevel should match the snapshot' , () => {
            expect(setRiskLevel(mockKey)).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(riskLevelReducer()).toEqual(3);
        });
        it('should return the passed state if called with no action' , () => {
            expect(riskLevelReducer(mockKey)).toEqual(mockKey);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(riskLevelReducer(mockKey, unknownAction)).toEqual(mockKey);
        });
        it('should return the value set' , () => {
            expect(riskLevelReducer('', setRiskLevel(mockKey))).toEqual(mockKey);
        });
    });
});