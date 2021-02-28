import React from 'react';
import { shallow } from 'enzyme';
import { TestableMonthlySum, mapStateToProps } from '../../components/UserInput/MonthlySum';

describe('MonthlySum Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionSetMonthlySum: jest.fn(),
            monthlySum: 100,
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableMonthlySum {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    describe('onChange', () => {
        it('should call actionSetMonthlySum when user input any value', () => {
            const wrapper = shallow(<TestableMonthlySum {...props} />);
            const event = { target: { value: 100.10}};
            wrapper.find('#monthlySum').simulate('change', event);
            expect(props.actionSetMonthlySum).toHaveBeenCalledTimes(1);
            expect(props.actionSetMonthlySum).toHaveBeenCalledWith(100);
        })
    })

    describe('mapStateToProps', () => {
        const monthlySumMock = 'mockValue';
    
        const mockedState = {
            monthlySum: monthlySumMock,
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    monthlySum: monthlySumMock,
                }
            )
        })
    })
})