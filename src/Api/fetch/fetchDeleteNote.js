import { BASE_URL } from "../utilities";

export const fetchDeleteNote = id => {
  const url = `${BASE_URL}/api/v1/notes/${id}`;
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
