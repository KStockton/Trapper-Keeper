import { BASE_URL } from "../utilities";

export const fetchAllNotes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/notes`);
    return response.json();
  } catch (e) {
    console.log("Failed to fetch notes", e)
  } 
};
