import { BASE_URL } from "../utilities";

export const fetchEditNote = async (note, updated) => {
  const url = `${BASE_URL}/notes/${note._id}`;
  const options = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updated)
  };
  try {
    await fetch(url, options)
  } catch (e) {
    console.log('Unable to edit note', e)
  }
};
