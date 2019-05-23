import { endPoint } from "../utilities";

export const fetchEditNote = note => {
  const url = `${endPoint}/api/notes/${note.id}`;
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note)
  };
  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw Error("Failed to edit note");
    } else {
      return response.json();
    }
  });
};
