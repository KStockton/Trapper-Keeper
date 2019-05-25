import { noteReducer } from "./noteReducer";
import * as actions from "../Actions";

describe('Reducer Tests', () => {
    describe('noteReducer', () => {
        it('should return an array of notes when case is ALL_NOTES ', () => {
            const initialState = [{id:1, title:"Starting State", task:[{id:77, text:"testing"}]}];
            const newNote = {id: 2, title: "Reducer Test", task:[{id:5, text:"testing"}]}
            const result = noteReducer(initialState, actions.allNotes(newNote))
            expect(result).toEqual([...initialState,newNote])
        })
    })
})