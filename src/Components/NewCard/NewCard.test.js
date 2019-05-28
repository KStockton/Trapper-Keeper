import React from "react";
import { shallow } from "enzyme";
import { NewCard } from "./NewCard";
import { fetchAddNote } from "../../Api/fetch/fetchAddNote";

describe("NewCard", () => {
  let wrapper;
  let mockEvent;
  beforeEach(() => {
    wrapper = shallow(<NewCard/>);
    mockEvent = { target: { value: "hello", name: "title" } };
  });
  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should change state while typing", () => {
    const input = wrapper.find("#title");
    input.simulate("change", mockEvent);
    expect(wrapper.state("title")).toBe("hello");
  });
  
  it("should toggle complete onClick", () => {
    wrapper.setState({notes: [{id: 7, completed: false}]})
    const input = wrapper.find(".unchecked");
    input.simulate("click", { target: { value: ["hello"], name: "notes", id: 7 } });
    expect(wrapper.state("notes")).toEqual([{"completed": true, "id": 7}]);
  });

  it('expect fetchAddNote to be called on save click', () => {
    wrapper.setState({notes: [{id: 7, completed: false}]})
    let MockFn = jest.spyOn(wrapper.instance(), "handleSaveNote")
    const saveButton = wrapper.find("#save-btn");
    saveButton.simulate("click");
    expect(MockFn).toHaveBeenCalled()
  })
  it("should call handleKeyPress on enter", () => {
    let MockFn = jest.spyOn(wrapper.instance(), "handleKeyPress")
    wrapper.simulate('keypress', {key: 'Enter'});
    expect(MockFn).toHaveBeenCalled
  })
});
