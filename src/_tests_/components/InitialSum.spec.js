import React from 'react';
import { shallow } from 'enzyme';
import { TestableInitialSum, mapStateToProps } from '../../components/UserInput/InitialSum';

describe('InitialSum Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionSetInitialSum: jest.fn(),
            initialSum: 100,
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableInitialSum {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    describe('onChange', () => {
        it('should call actionSetInitialSum when user input any value', () => {
            const wrapper = shallow(<TestableInitialSum {...props} />);
            const event = { target: { value: 100.10}};
            wrapper.find('#initialSum').simulate('change', event);
            expect(props.actionSetInitialSum).toHaveBeenCalledTimes(1);
            expect(props.actionSetInitialSum).toHaveBeenCalledWith(100);
        })
    })

    describe('mapStateToProps', () => {
        const initialSumMock = 'mockValue';
    
        const mockedState = {
            initialSum: initialSumMock,
        };

        it('should return the module state from the redux store', () => {
            const mockPropsFromRedux = mapStateToProps(mockedState);
            expect(mockPropsFromRedux).toEqual(
                {
                    initialSum: initialSumMock,
                }
            )
        })
    })
})