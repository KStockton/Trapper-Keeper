export const fetchAllNotes = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASEURL}api/v1/notes`)
      return response.json();
};
