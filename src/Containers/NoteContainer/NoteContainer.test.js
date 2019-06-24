import React from "react";
import { shallow } from "enzyme";
import {
  NoteContainer,
  mapStateToProps,
  mapDispatchToProps
} from "./NoteContainer";
import { allNotes } from "../../Actions/index";
import { fetchAllNotes } from "../../Api/fetch/fetchAllNotes";

jest.mock("../../Api/fetch/fetchAllNotes.js");
const mockAllNotes = jest.fn();

describe("NoteContainer", () => {
  let wrapper, mockFn, mockNotes, instance;

  fetchAllNotes.mockImplementation(() => Promise.resolve(1));

  beforeEach(() => {
    mockNotes = [
      {
        id: 1,
        title: "testing",
        tasks: [{ id: 77, text: "testing" }]
      },
      {
        id: 3,
        title: "testing2",
        tasks: [{ id: 55, text: "testing2" }]
      }
    ];
    mockFn = jest.fn();
    wrapper = shallow(<NoteContainer renderNotes={mockFn} notes={mockNotes} allNotes={mockAllNotes} />);
    instance = wrapper.instance();
  });

  afterEach(() => {
    fetchAllNotes.mockClear();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should match the snapshot", () => {
    let notes = [];
    wrapper = shallow(<NoteContainer notes={notes} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("renderNotes", () => {
    it("should return the proper values when invoked", () => {
      const results = instance.renderNotes();
      expect(results).toHaveLength(2);
    });
  });

  describe("componentDidMount", () => {
    it("should invoke 'fetchAllNotes' when mounted", () => {
      instance.componentDidMount();
      expect(fetchAllNotes).toHaveBeenCalled();
    });

    it("should invoke 'allNotes' after fetch is done", () => {
      instance.componentDidMount();
      expect(mockAllNotes).toHaveBeenCalled();
    })
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
        fakeState: "Fake for testing"
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

  describe("mapDispatchToProps", () => {
    it("should call dispatch on allNotes", () => {
      const mockDispatch = jest.fn();
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
      const actionToDispatch = allNotes(mockState);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.allNotes(mockState);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
