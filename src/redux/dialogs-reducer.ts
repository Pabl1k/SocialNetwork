import {v1} from "uuid";
import {DialogsPageType} from "./store";

const ADD_NEW_DIALOGS_MESSAGE = 'ADD-NEW-DIALOGS-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-DIALOGS-MESSAGE'

let initialState = {
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newDialogsMessage = action.body;
            return state;
        case ADD_NEW_DIALOGS_MESSAGE:
            let body = state.newDialogsMessage
            state.newDialogsMessage = '';
            state.messages.push({id: v1(), message: body});
            return state;
        default:
            return state;
    }
}
export const AddNewDialogsPageMessageAC = (newMessage: string) => {
    return {
        type: ADD_NEW_DIALOGS_MESSAGE,
        newMessage: newMessage
    } as const
}

export const updateNewDialogsPageMessageAC = (body: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

export default dialogsReducer;