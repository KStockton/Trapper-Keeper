import { BASE_URL } from "../utilities";

export const fetchDeleteNote = async (id) => {
  const url = `${BASE_URL}/api/v1/notes/${id}`;
  const options = {
    method: "DELETE"
  };

 const response = await fetch(url, options)
   if (!response.ok) {
      throw Error("Failed to delete note");
    // } else {
    //   return response.json();
    // } 
    //removed below because it was causing an error that indicated we set headers twice, which is true from the backend.
    // response.sendStatus(204);

};
