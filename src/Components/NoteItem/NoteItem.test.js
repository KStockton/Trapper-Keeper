import React from "react";
import { shallow } from "enzyme";
import NoteItem from "./NoteItem";

describe("NoteItem", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NoteItem />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
