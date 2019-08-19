
export const fetchAddNote = async (title, list) => {
  const url = `${process.env.REACT_APP_BASEURL}api/v1/notes`;
  const body = { id: new Date(), title, list };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };
  const response = await fetch(url, options)
      return response.json();
};
