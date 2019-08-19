export const fetchNote = async id => {
  const url = `${process.env.REACT_APP_BASEURL}/api/v1/notes/${id}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Could not fetch Note with ${id}`);
  }
  return await response.json();
};
