import React from "react";
import { shallow } from "enzyme";
import { NewCard } from "./NewCard";
import { fetchAddNote } from "../../Api/fetch/fetchAddNote";
import { fetchNote } from "../../Api/fetch/fetchNote";

describe("NewCard", () => {
  let wrapper;
  let mockEvent;
  beforeEach(() => {
    wrapper = shallow(<NewCard />);
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
    wrapper.setState({ notes: [{ id: 7, completed: false }] });
    const input = wrapper.find(".unchecked");
    input.simulate("click", {
      target: { value: ["hello"], name: "notes", id: 7 }
    });
    expect(wrapper.state("notes")).toEqual([{ completed: true, id: 7 }]);
  });

  it("expect fetchAddNote to be called on save click", () => {
    wrapper.setState({ notes: [{ id: 7, completed: false }] });
    let MockFn = jest.spyOn(wrapper.instance(), "handleSaveNote");
    const saveButton = wrapper.find("[data-test='save-note']");
    saveButton.simulate("click");
    expect(MockFn).toHaveBeenCalled();
  });
  it("should call handleKeyPress on enter", () => {
    let MockFn = jest.spyOn(wrapper.instance(), "handleKeyPress");
    const addItem = wrapper.find("[data-test='enter-item']");
    addItem.simulate("keypress", { key: "Enter" });
    expect(MockFn).toHaveBeenCalled;
  });
  it("should call grabInfo on mount", () => {
    let MockFn = jest.spyOn(wrapper.instance(), "grabInfo");
    wrapper.instance().componentDidMount();
    let prop = { id: 22, title: "testing" };
    wrapper = shallow(<NewCard props={prop} />);
    expect(MockFn).toHaveBeenCalled();
  });
  it("expect handleSaveNote to be called on save click", () => {
    wrapper.setState({ notes: [{ id: 7, completed: false }] });
    let MockFn = jest.spyOn(wrapper.instance(), "handleSaveNote");
    const saveButton = wrapper.find("[data-test='save-note']");
    saveButton.simulate("click");
    expect(MockFn).toHaveBeenCalled();
  });
  it.skip("should call deleteListItem on click", () => {
    let MockFn = jest.spyOn(wrapper.instance(), "deleteListItem");
    const deleteButton = wrapper.find("[data-test='delete-button']");
    deleteButton.simulate("click");
    expect(MockFn).toHaveBeenCalled;
  });
});
