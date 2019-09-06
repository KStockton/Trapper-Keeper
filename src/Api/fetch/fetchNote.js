import { BASE_URL } from "../utilities";

export const fetchNote = async id => {
  const url = `${BASE_URL}/notes/${id}`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    console.log('Unable to locate selected note', e)
  }
};
