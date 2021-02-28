import React from 'react';
import { shallow } from 'enzyme';
import { TestableRiskLevelSelector } from '../../components/UserInput/RiskLevelSelector';

describe('RiskLevelSelector Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionSetRiskLevel: jest.fn(),
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableRiskLevelSelector {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    describe('onChange', () => {
        it('should call actionSetRiskLevel when user input any value', () => {
            const wrapper = shallow(<TestableRiskLevelSelector {...props} />);
            const event = { target: { value: 10}};
            wrapper.find('#riskLevel').simulate('change', event);
            expect(props.actionSetRiskLevel).toHaveBeenCalledTimes(1);
            expect(props.actionSetRiskLevel).toHaveBeenCalledWith(10);
        })
    })
})