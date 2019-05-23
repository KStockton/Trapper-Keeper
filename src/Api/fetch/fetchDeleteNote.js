import { endPoint } from "../utilities";

export const fetchDeleteNote = id => {
  const url = `${endPoint}/notes/${id}`;
  const init = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  };
  return fetch(url, init).then(response => {
    if (!response.ok) {
      throw Error("Failed to delete note");
    } else {
      return response.json();
    }
  });
};
