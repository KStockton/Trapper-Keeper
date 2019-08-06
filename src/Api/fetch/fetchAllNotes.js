import { BASE_URL } from "../utilities";

export const fetchAllNotes = async () => {
  const response = await fetch(`${BASE_URL}/api/v1/notes`)
      return response.json();
};
