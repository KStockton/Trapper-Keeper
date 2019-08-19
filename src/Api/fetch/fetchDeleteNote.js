export const fetchDeleteNote = async id => {
  const url = `${process.env.REACT_APP_BASEURL}/api/v1/notes/${id}`;
  const options = {
    method: "DELETE"
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw Error("Failed to delete note");
  }
};
