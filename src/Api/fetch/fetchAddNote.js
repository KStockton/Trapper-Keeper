import { BASE_URL } from '../utilities';

export const fetchAddNote = async (title, notes) => {
	const url = `${BASE_URL}/notes`;
	const body = { title, notes };
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	};

	try {
		const response = await fetch(url, options);
		return response.json();
	} catch (e) {
		console.log('Unable to Add a new note', e);
	}
};
