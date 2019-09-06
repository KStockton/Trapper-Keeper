import { BASE_URL } from '../utilities';

export const fetchDeleteNote = async id => {
	const url = `${BASE_URL}/notes/${id}`;
	const options = {
		method: 'DELETE'
	};

	try {
		await fetch(url, options);
	} catch (e) {
		console.log('Failed to delete note', e);
	}
};
