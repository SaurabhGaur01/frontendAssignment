import React from 'react';
import { shallow } from 'enzyme';
import { TestableApp } from '../../components/App';

describe('App Component', () => {
    let props;

    beforeEach(() =>{
        props = {
            actionHandleRetrieveData: jest.fn(),
        };
    });

    it('should render correctly', () => {
        const renderedModule = shallow(<TestableApp {...props} />);
        expect(renderedModule).toMatchSnapshot();
    });

    it('should call actionHandleRetrieveData when component mounts', () => {
        jest.spyOn(React, 'useEffect').mockImplementationOnce(f => f());
        shallow(<TestableApp {...props} />);
        expect(props.actionHandleRetrieveData).toHaveBeenCalledTimes(1);
    });
})