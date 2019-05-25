import { fetchAddNote } from './fetchAddNote';
import { fetchAllNotes } from './fetchAllNotes';
import { fetchDeleteNote } from './fetchDeleteNote';
import { fetchEditNote } from './fetchEditNote';



describe('fetchData', () => {
  let mockBody
  let mockNote
  let url

  beforeEach(() => {
    url = "localhost:3001/api/v1/notes";
    mockNote = { 
      id: 1,
      title: 'Team To-Do',
      list: [
        { id: 'a',
          text: 'Show project at demo night',
          isComplete: false
        }
      ]
    };

    mockBody = {
      method: 'GET',
      body: JSON.stringify(),
      headers:{
        'Content-Type': 'application/json'
      }
    }

    fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      status: 200,
      json: () => Promise.resolve(mockNote)
    }))
  })

  it('should take an expected url', async () => {
    await fetchData(url, mockBody)
    expect(fetch).toHaveBeenCalledWith(url, mockBody)
  })

  it('should return expected data', async () => {
    const result = await fetchData(url, mockBody);
    expect(result).toEqual(mockNote);
  });

  it('should throw an error if everything is not okay', async () => {
    window.fetch = jest.fn(() => Promise.resolve({
      status: 422,
      ok: false,
      json: jest.fn(() => Promise.resolve('Title is required'))
    }));
    const expected = new Error('Title is required');
    await expect(fetchData(url, mockBody)).rejects.toEqual(expected);
  });

})