import { endPoint } from "../utilities";

export const fetchAllNotes = () => {
  return fetch(`${endPoint}/notes`).then(response => {
    if (!response.ok) {
      throw Error("Failed to get notes");
    } else {
      return response.json();
    }
  });
};
