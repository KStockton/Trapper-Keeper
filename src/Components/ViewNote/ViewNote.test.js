import React from 'react';
import { shallow } from 'enzyme';
import ViewNote from './ViewNote'


describe('ViewNote', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ViewNote/>)
    })
    it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
     
    })
})