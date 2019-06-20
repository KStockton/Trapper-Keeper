import { fetchAllNotes } from "./fetchAllNotes";
import { fetchAddNote } from "./fetchAddNote";
import { fetchDeleteNote } from "./fetchDeleteNote";
import { fetchEditNote } from "./fetchEditNote";
import { fetchNote } from "./fetchNote";

describe("fetch calls", () => {
  let mockNotes;
  let URL;

  beforeEach(() => {
    URL = "http://localhost:3000/api/v1/notes";
    mockNotes = [
      { id: 1, title: "Testing", notes: [{ id: 77, message: "a test" }] },
      {
        id: 22,
        title: "Testing also",
        notes: [{ id: 65, message: "testing notes" }]
      }
    ];
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockNotes)
      })
    );
  });

  describe("fetchAllNotes", () => {
    let mockGET;

    beforeEach(() => {
      mockGET = {
        method: "GET",
        body: JSON.stringify(),
        headers: {
          "Content-Type": "application/json"
        }
      };
    });

    it("should take an expected URL;", async () => {
      await fetchAllNotes(mockGET);
      expect(fetch).toHaveBeenCalledWith(URL);
    });

    it("should return expected notes", async () => {
      const result = await fetchAllNotes(URL, mockGET);
      expect(result).toEqual(mockNotes);
    });

  });

  describe("fetchAddNote", () => {
    let mockPost;
    let mockBody;
    let expected;

    beforeEach(() => {
      expected = [
        { id: 1, notes: [{ id: 77, message: "a test" }], title: "Testing" },
        {
          id: 22,
          notes: [{ id: 65, message: "testing notes" }],
          title: "Testing also"
        }
      ];
      mockBody = {
        id: 22,
        title: "Testing also",
        notes: [{ id: 65, message: "testing notes" }]
      };
      mockPost = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mockBody)
      };
    });

    it("should add a new note to notes", async () => {
      const result = await fetchAddNote(mockPost);
      expect(result).toEqual(expected);
    });
  });

  describe("fetchDeleteNote", () => {
    let mockDelete;
    let expected;
    
    beforeEach(() => {
      expected = [
        {
          id: 1,
          title: "A test",
          notes: [{ id: 77, message: "a test" }],
          title: "Testing"
        },
        {
          id: 23,
          title: "another test",
          notes: [{ id: 65, message: "testing notes" }],
          title: "Testing also"
        }
      ];
      mockDelete = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      };
    });

    it("should delete the correct note", async () => {
      window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockNotes)
      })
    );
      const result = await fetchDeleteNote(25);
      expect(result).toEqual();
    });

    it("should throw an error if something goes wrong on user end", async () => {
      window.fetch = jest.fn(() =>
        Promise.resolve({
          status: 422,
          ok: false,
          json: jest.fn(() => Promise.resolve("Failed to delete note"))
        })
      );
      const expected = new Error("Failed to delete note");
      await expect(fetchDeleteNote(64)).rejects.toEqual(expected);
    });
  });

  describe("fetchEditNote", () => {
    let editNote;
    beforeEach(() => {
      editNote = {
        id: 22,
        title: "Turtles",
        notes: [{ id: 65, message: "blah" }]
      };
    });
    it.skip("should edit the correct note", async () => {
      const result = await fetchEditNote(editNote);
      expect(result).toBe([
        { id: 1, notes: [{ id: 77, message: "a test" }], title: "Testing" },
        editNote
      ]);
    });

    it("should take an expected note", async () => {
      await fetchEditNote(editNote);
      expect(fetch).toHaveBeenCalledWith(
        "http://localhost:3000/api/v1/notes/22",
        {
          body: '{"id":22,"title":"Turtles","notes":[{"id":65,"message":"blah"}]}',
          headers: { "Content-Type": "application/json" },
          method: "PUT"
        }
      );
    });
  });

  describe("fetchNote", () => {
    it("should fetch the correct note", async () => {
      let note = {
        id: 22,
        title: "Turtles",
        notes: [{ id: 65, message: "blah" }]
      };
      const result = await fetchNote(22);
      expect(result).toEqual(mockNotes);
    });

    it("should throw an error if something goes wrong on user end", async () => {
      window.fetch = jest.fn(() =>
        Promise.resolve({
          status: 422,
          ok: false,
          json: jest.fn(() => Promise.resolve("Could not fetch Note with 11"))
        })
      );
      const expected = new Error("Could not fetch Note with 11");
      await expect(fetchNote(11)).rejects.toEqual(expected);
    });
  });
});
