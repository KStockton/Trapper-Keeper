import React from 'react'
import { shallow } from 'enzyme'
import { NoteCard, mapStateToProps, mapDispatchToProps  } from './NoteCard'
import { deleteNote } from "../../Actions/index";

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
    let mockEvent = { target: { value: "", name: "title" } };
    wrapper.find('.note-title').simulate('change', mockEvent );
    expect(wrapper.state("title")).toBe("");    
  })

  it('should call handleDelete note when button is clicked', () => {
    let MockFn = jest.spyOn(wrapper.instance(), "handleDelete")
    wrapper.setState({ delete: true });
    let button = wrapper.find('.red-delete-btn')
    button.simulate("click", 22);
    expect(MockFn).toHaveBeenCalled();
  })

  it('should toggle state delete', () => {
    wrapper.setState({ delete: true });
    let button = wrapper.find('.red-delete-btn')
    button.simulate("mouseleave", "test");
    expect(wrapper.state('delete')).toEqual(false)
  })
  describe('mapDispatchToProps', () => {
 
    
    it('should call dispatch on deleteNote', () => {
      const mockDispatch = jest.fn()
      const mockState = {
        notes: [{id:1, title: "Testing mapState", tasks:[{id:99, text:"testing"}]}],
        fakeState: "Not real state to return"
      }
      const actionToDispatch = deleteNote(mockState)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.deleteNote(mockState)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  });

})