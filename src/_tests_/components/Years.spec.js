import React from 'react';
import { shallow } from 'enzyme';
import { TestableYears, mapStateToProps } from '../../components/UserInput/Years';

describe('Years Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionSetYears: jest.fn(),
            years: 10,
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableYears {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    describe('onChange', () => {
        it('should call actionSetYears when user input any value', () => {
            const wrapper = shallow(<TestableYears {...props} />);
            const event = { target: { value: 10}};
            wrapper.find('#years').simulate('change', event);
            expect(props.actionSetYears).toHaveBeenCalledTimes(1);
            expect(props.actionSetYears).toHaveBeenCalledWith(10);
        })
    })

    describe('mapStateToProps', () => {
        const yearsMock = 'mockValue';
    
        const mockedState = {
            years: yearsMock,
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    years: yearsMock,
                }
            )
        })
    })
})