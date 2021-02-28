import React from 'react';
import { shallow } from 'enzyme';
import { TestableTableComponent, mapStateToProps } from '../../components/Table/Table';

jest.mock('../../utils/calculateTimeSeries', () => () => ({
    median: [{ x: 1.2, y: 2.5 }],
    upper95: [{ x: 1.2, y: 2.5 }],
    lower05: [{ x: 1.2, y: 2.5 }],
}))

describe('Table Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            riskLevel: 3,
            initialSum: 5000,
            years: 10,
            monthlySum: 500,
            conesData: [{
                riskLevel: 3,
                mu: 0.024,
                sigma: 0.031,
            }]
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableTableComponent {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should render correctly when conesData is empty', () => {
        props.conesData = [];
        const renderedModule = shallow(<TestableTableComponent {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    describe('mapStateToProps', () => {
        const riskLevelMock = 'mockValue';
        const conesDataMock = [{ mockKey: 'mockValue'}];
        const initialSumMock = 'mockValue';
        const yearsMock = 'mockValue';
        const monthlySumMock = 'mockValue';
    
        const mockedState = {
            riskLevel: riskLevelMock,
            conesData: conesDataMock,
            initialSum: initialSumMock,
            years: yearsMock,
            monthlySum: monthlySumMock,
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    riskLevel: riskLevelMock,
                    conesData: conesDataMock,
                    initialSum: initialSumMock,
                    years: yearsMock,
                    monthlySum: monthlySumMock,
                }
            )
        })
    })
})