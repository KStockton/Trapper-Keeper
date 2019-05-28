import React from 'react'
import { shallow } from 'enzyme'
import { NoteCard } from './NoteCard'

describe("NoteCard", () => {
  let wrapper;
  let mockData;
  let mockDelete = jest.fn()
  let mockMouse = jest.fn()
  beforeEach(() => {
    mockData = {title: "testing", id: 22, list:[{id: 35,task:"testing"},{id: 77,task:"test"}]}
    wrapper = shallow(<NoteCard data={mockData} handleDelete={mockDelete} handleMouseOver={mockMouse} />)
  })

  it('expect wrapper to match snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should call handlechange on input change', () => {
    let mockEvent = { target: { value: "hello", name: "title" } };
    wrapper.find('.note-title').simulate('change', mockEvent );
    expect(wrapper.state("title")).toBe("hello");    
  })

  it('should call handleDelete note when button is clicked', () => {
    wrapper.setState({ delete: true });
    let button = wrapper.find('.red-delete-btn')
    button.simulate("click", 22);
    wrapper.instance().handleDelete = jest.fn()
    expect(wrapper.instance().handleDelete).toHaveBeenCalled();
  })

  it('should toggle state delete', () => {
    wrapper.setState({ delete: true });
    let button = wrapper.find('.red-delete-btn')
    button.simulate("mouseleave", "test");
    expect(wrapper.state('delete')).toEqual(false)
  })

})