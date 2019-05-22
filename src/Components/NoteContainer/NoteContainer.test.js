import React from "react";
import { shallow } from "enzyme";
import NoteContainer from "./NoteContainer";

describe("NoteContainer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NoteContainer />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
