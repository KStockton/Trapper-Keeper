import { noteReducer } from "./noteReducer";
import * as actions from "../Actions";

describe('Reducer Tests', () => {
    describe('noteReducer', () => {
        let initialState;
        let newNote;
        beforeEach(() => {
            initialState = [{id:1, title:"Starting State", task:[{id:77, text:"testing"}]}];
            newNote = {id: 2, title: "Reducer Test", task:[{id:5, text:"testing"}]}
        })
        it('should return an array of notes when case is ALL_NOTES ', () => {
            const result = noteReducer(initialState, actions.allNotes(newNote))
            expect(result).toEqual([...initialState,newNote])
        })

        it('should return initial state when case is not ALL_NOTES ', () => {
            const result = noteReducer(initialState, {})
            expect(result).toEqual(initialState)
        })
    })
})