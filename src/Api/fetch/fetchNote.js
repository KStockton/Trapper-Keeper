import { BASE_URL } from "../utilities";

export const fetchNote = async (id) => {

  const url = `${BASE_URL}/api/v1/notes/${id}`
  
  const response = await fetch(url)
  console.log(response,"grab note")
}

