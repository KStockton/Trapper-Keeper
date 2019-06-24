import React from "react";
import { shallow } from "enzyme";
import { NoteCard, mapDispatchToProps } from "./NoteCard";
import { fetchDeleteNote } from "../../Api/fetch/fetchDeleteNote";
import { deleteNote, handleError } from "../../Actions/index";

jest.mock("../../Api/fetch/fetchDeleteNote.js");

describe("NoteCard", () => {
  let wrapper, mockData, instance;
  let mockDelete = jest.fn();
  let mockMouse = jest.fn();
  let mockDeleteNote = jest.fn();
  let mockHandleError = jest.fn();

  fetchDeleteNote.mockImplementation(() => Promise.resolve());

  beforeEach(() => {
    mockData = {
      title: "testing",
      id: 22,
      list: [{ id: 35, task: "testing" }, { id: 77, task: "test" }]
    };
    wrapper = shallow(
      <NoteCard
        data={mockData}
        handleDelete={mockDelete}
        handleMouseOver={mockMouse}
        deleteNote={mockDeleteNote}
        handleError={mockHandleError}
      />
    );
    instance = wrapper.instance();
  });

  it("expect wrapper to match snapShot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should call handlechange on input change", () => {
    let mockEvent = { target: { value: "", name: "title" } };
    wrapper.find(".note-title").simulate("change", mockEvent);
    expect(wrapper.state("title")).toBe("");
  });

  describe("handleDelete", () => {
    it("should call handleDelete note when button is clicked", () => {
      let MockFn = jest.spyOn(wrapper.instance(), "handleDelete");
      wrapper.setState({ delete: true });
      let button = wrapper.find(".red-delete-btn");
      button.simulate("click", 22);
      expect(MockFn).toHaveBeenCalled();
    });

    it("should invoke 'fetchDeleteNote' with correct params", () => {
      instance.handleDelete(1);
      expect(fetchDeleteNote).toHaveBeenCalledWith(1);
    });

    it("should invoke 'deleteNote' with correct params", () => {
      instance.handleDelete(1);
      expect(mockDeleteNote).toHaveBeenCalledWith(1);
    });

    it("should finally throw an error if the response is not ok and save that error to redux store", async () => {
      fetchDeleteNote.mockImplementationOnce(() =>
        Promise.reject(new Error("Fetch failed"))
      );
      await instance.handleDelete();
      expect(mockHandleError).toHaveBeenCalledWith("Fetch failed");
    });
  });

  describe("handleMouseOver", () => {
    it("should toggle state delete", () => {
      wrapper.setState({ delete: true });
      let button = wrapper.find(".red-delete-btn");
      button.simulate("mouseleave", "test");
      expect(wrapper.state("delete")).toEqual(false);
    });
  });

  describe("mapDispatchToProps", () => {
    it("should call dispatch on deleteNote", () => {
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
      const actionToDispatch = deleteNote(mockState);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.deleteNote(mockState);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it("should call dispatch for handleError", () => {
      const error = "Mock Error";
      const mockDispatch = jest.fn();
      const actionToDispatch = handleError(error);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.handleError(error);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});
