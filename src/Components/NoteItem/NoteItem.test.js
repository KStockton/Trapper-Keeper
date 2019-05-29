import React from "react";
import { shallow } from "enzyme";
import { NoteItem } from "./NoteItem";

describe("NoteItem", () => {
  let wrapper;
  let mockFn = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <NoteItem handleChange={mockFn} tasks={{ message: "hello" }} />
    );
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("state isComplete should toggle on click", () => {
    let stateStatus = wrapper.state("isComplete");
    wrapper.find("#unchecked").simulate("click");
    expect(wrapper.state("isComplete")).toEqual(!stateStatus);
  });

  it.skip("should update state on handleChange", () => {
    let mockEvent = { target: { value: "hello", name: "listItem" } };
    wrapper.find(".list-item").simulate("change", mockEvent);
    expect(wrapper.state("listItem")).toEqual("hello");
  });
});
