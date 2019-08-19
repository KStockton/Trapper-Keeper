// import { BASE_URL } from "../utilities";

export const fetchEditNote = note => {
  const url = `${process.env.REACT_APP_BASEURL}/api/v1/notes/${note.id}`;
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note)
  };
  return fetch(url, options)

};
