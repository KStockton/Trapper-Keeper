import React from "react";
import { shallow } from "enzyme";
import { NewCard } from './NewCard';

describe('NewCard', () => {
    let wrapper;
    let MockFn = jest.fn()
    let mockEvent;
    beforeEach(() => {
        wrapper = shallow(<NewCard handleChange={MockFn}/>);
        mockEvent = {target:{value: "hello", name: "title"}}
    })
    it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
    })
    it.skip('should call handleChange on input change', () => {
        const input = wrapper.find('#title');
        input.simulate('change', mockEvent);
        expect(MockFn).toHaveBeenCalled()
    })
    it('should change state while typing', () => {
    const input = wrapper.find('#title');
    input.simulate('change', mockEvent);
    expect(wrapper.state('title')).toBe('hello');

    })
})