import React from "react";
import { shallow } from "enzyme";
import { NewCard } from "./NewCard";

describe("NewCard", () => {
  let wrapper;
  let MockFn = jest.fn();
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
  it.skip("should toggle complete onClick", () => {
    const input = wrapper.find("#title");
    input.simulate("click", { target: { value: ["hello"], name: "notes" } });
    expect(wrapper.state("notes")).toEqual("testing");
  });
});
