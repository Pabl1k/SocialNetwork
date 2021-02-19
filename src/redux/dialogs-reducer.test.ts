import {v1} from "uuid";
import {DialogsPageType} from "./store";
import dialogsReducer, {AddNewDialogsPageMessageAC, updateNewDialogsPageMessageAC} from "./dialogs-reducer";

let startState: DialogsPageType

beforeEach(() => {
    startState = {
        dialogs: [
            {id: v1(), name: 'Dimych'},
            {id: v1(), name: 'Andrew'},
            {id: v1(), name: 'Sveta'},
            {id: v1(), name: 'Sasha'},
            {id: v1(), name: 'Viktor'},
            {id: v1(), name: 'Valera'}
        ],
        messages: [
            {id: v1(), message: 'Hi'},
            {id: v1(), message: 'How is your it-kamasutra?'},
            {id: v1(), message: 'Yo'},
            {id: v1(), message: 'Yo'},
            {id: v1(), message: 'Yo'}
        ],
        newDialogsMessage: ''
    }
})

test('message should be added to messages array', () => {
    const action = AddNewDialogsPageMessageAC();
    const endState = dialogsReducer(startState, action);

    expect(endState.messages.length).toBe(6)
})

test('correct message should be added', () => {
    const action = updateNewDialogsPageMessageAC('test');
    const endState = dialogsReducer(startState, action);

    expect(endState.newDialogsMessage).toBe('test')
})