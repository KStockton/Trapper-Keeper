import { noteReducer } from "./noteReducer";
import * as actions from "../Actions";

describe("Reducer Tests", () => {
  describe("noteReducer", () => {
    let notes;
    beforeEach(() => {
      notes = [
        { id: 1, title: "Starting State", task: [{ id: 77, text: "testing" }] }
      ];
    });
    it("should return an array of notes when case is ALL_NOTES ", () => {
      const result = noteReducer([], actions.allNotes(notes));
      expect(result).toEqual(notes);
    });

    it("should return initial state when case is not ALL_NOTES ", () => {
      const result = noteReducer([], {});
      expect(result).toEqual([]);
    });
    it("should return initial state when case is not ALL_NOTES ", () => {
      const result = noteReducer([], {});
      expect(result).toEqual([]);
    });

    it("should return initial state when case is not DELETE_NOTE ", () => {
      const result = noteReducer(notes, actions.deleteNote(notes));
      expect(result).toEqual(notes);
    });
  });
});
