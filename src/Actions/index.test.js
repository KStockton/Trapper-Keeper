import * as actions from "./index";
import MockData from "../Helpers/mockData";

describe("actions", () => {
  it("should return a type of ALL_NOTES", () => {
    const notes = MockData.mockNotes;
    const expected = {
      type: "ALL_NOTES",
      notes
    };

    const result = actions.allNotes(notes);
    expect(result).toEqual(expected);
  });

  it("should return a type of DELETE_NOTE", () => {
    const id = "cSKfF_h1u";
    const expected = {
      type: "DELETE_NOTE",
      id
    };

    const result = actions.deleteNote(id);
    expect(result).toEqual(expected);
  });

  it("should return a type of HANDLE_ERROR", () => {
    const errorMessage = "Mock Error Message.";
    const expected = {
      type: "HANDLE_ERROR",
      errorMessage
    };

    const result = actions.handleError(errorMessage);
    expect(result).toEqual(expected);
  });
});


