import { BASE_URL } from "../utilities";

export const fetchAddNote = (title, list) => {
  console.log('list:', list)
  const url = `${BASE_URL}/api/v1/notes`;
  const body = { id: new Date(), title, list };
  console.log(body)
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };
  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw Error("Note must include Title and Tasks");
    } else {
      return response.json();
    }
  });
};
