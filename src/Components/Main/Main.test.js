import React from "react";
import { shallow } from "enzyme";
import Main from "./Main";

describe("Main", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
