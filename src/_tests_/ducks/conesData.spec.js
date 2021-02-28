import {
    setConesData,
    conesDataReducer,
} from '../../ducks/conesData';

const mockObject = [
    {
        mockVariable: 'mockValue',
    }
];

describe('conesData Duck Tests', () => {
    const unknownAction = {
        type: 'UNKNOWN',
    }

    describe('Action Generator', () => {
        it('setConesData should match the snapshot' , () => {
            expect(setConesData(mockObject)).toMatchSnapshot();
        });
    });

    describe('Reducer', () => {
        it('should return the initial state if called with undefined' , () => {
            expect(conesDataReducer()).toEqual([]);
        });
        it('should return the passed state if called with no action' , () => {
            expect(conesDataReducer(mockObject)).toEqual(mockObject);
        });
        it('should return the passed state if called with an unknown action' , () => {
            expect(conesDataReducer(mockObject, unknownAction)).toEqual(mockObject);
        });
        it('should return the value of set data' , () => {
            expect(conesDataReducer('', setConesData(mockObject))).toEqual(mockObject);
        });
    });
});