import { BASE_URL } from "../utilities";

export const fetchEditNote = note => {
  const url = `${BASE_URL}/api/v1/notes/${note.id}`;
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note)
  };
  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error("Failed to edit note");
    }
  });
};
