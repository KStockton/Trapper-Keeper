import { fetchAllNotes } from "./fetchAllNotes";
import { fetchAddNote } from "./fetchAddNote";
import { fetchDeleteNote } from "./fetchDeleteNote";
import { fetchEditNote } from "./fetchEditNote";

describe("fetch calls", () => {
  let mockNotes;
  let URL;

  beforeEach(() => {
    URL = "http://localhost:3000/api/v1/notes";
    mockNotes = [
      { id: 1, title: "Testing", tasks: [{ id: 77, text: "a test" }] },
      {
        id: 22,
        title: "Testing also",
        tasks: [{ id: 65, text: "testing notes" }]
      }
    ];
    fetch = jest.fn().mockImplementation(() =>
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

    it("should throw an error if something goes wrong on user end", async () => {
      window.fetch = jest.fn(() =>
        Promise.resolve({
          status: 422,
          ok: false,
          json: jest.fn(() => Promise.resolve("Failed to get notes"))
        })
      );
      const expected = new Error("Failed to get notes");
      await expect(fetchAllNotes(URL, mockGET)).rejects.toEqual(expected);
    });
  });

  describe("fetchAddNote", () => {
    let mockPost;
    let mockBody;
    let expected;
    beforeEach(() => {
      expected = [
        { id: 1, tasks: [{ id: 77, text: "a test" }], title: "Testing" },
        {
          id: 22,
          tasks: [{ id: 65, text: "testing notes" }],
          title: "Testing also"
        }
      ];
      mockBody = {
        id: 22,
        title: "Testing also",
        tasks: [{ id: 65, text: "testing notes" }]
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

    it("should thrown an error if the note is missing title or tasks", async () => {
      window.fetch = jest.fn(() =>
        Promise.resolve({
          status: 422,
          ok: false,
          json: jest.fn(() =>
            Promise.resolve("Note must include Title and Tasks")
          )
        })
      );
      const expected = new Error("Note must include Title and Tasks");
      await expect(fetchAddNote(mockPost)).rejects.toEqual(expected);
    });
  });

  describe('fetchDeleteNote', () => {
    let mockDelete;
    let expected;
    beforeEach(() => {
      expected = [
        { id: 1, 
          title: "A test",
          tasks: [{ id: 77, text: "a test" }], 
          title: "Testing" },
        {
          id: 23,
          title: "another test",
          tasks: [{ id: 65, text: "testing notes" }],
          title: "Testing also"
        }
      ];
      mockDelete = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      };
    }); 
      it('should delete the correct note', async () => {
        const result = await fetchDeleteNote(25);
        expect(result).toEqual([{"id": 1, "tasks": [{"id": 77, "text": "a test"}], "title": "Testing"}, {"id": 22, "tasks": [{"id": 65, "text": "testing notes"}], "title": "Testing also"}])
      })
    })

  describe('fetchEditNote', () => {
      let editNote;
      beforeEach(() => {
        editNote ={ id: 22, 
            title: "Turtles",
            tasks: [{ id: 65, text: "blah" }] } 
      })
      it.skip('should edit the correct note', async () => {
        const result = await fetchEditNote(editNote);
        expect(result).toBe([{"id": 1, "tasks": [{"id": 77, "text": "a test"}], "title": "Testing"},editNote])
      })
  })
});
