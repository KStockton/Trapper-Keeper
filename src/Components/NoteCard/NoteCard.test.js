import React from 'react'
import { shallow } from 'enzyme'
import { NoteCard } from './NoteCard'

describe("NoteCard", () => {
  let wrapper;
  let mockItem
  beforeEach(() => {
    mockItem = {data:{title: "testing", id: 22}}
    wrapper = shallow(<NoteCard props ={mockItem} />)
  })

  it('expect wrapper to match snapShot', () => {
    expect(wrapper).toMatchSnapshot()
  })

})