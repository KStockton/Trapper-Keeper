import React from "react";
import { shallow } from "enzyme";
import { App, mapStateToProps, mapDispatchToProps } from "./App";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe("mapStateToProps", () => {
    it("should set props as an object with an array from state", () => {
      const mockState = {
        notes: [
          {
            id: 1,
            title: "Testing mapState",
            tasks: [{ id: 99, text: "testing" }]
          }
        ],
        fakeState: "Not real state to return"
      };
      const expected = {
        notes: [
          {
            id: 1,
            title: "Testing mapState",
            tasks: [{ id: 99, text: "testing" }]
          }
        ]
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });
  });
});
