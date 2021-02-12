import {v1} from "uuid";
import {DialogsPageType} from "./store";

enum ACTION_TYPE {
    ADD_NEW_DIALOGS_MESSAGE = 'ADD-NEW-DIALOGS-MESSAGE',
    UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-DIALOGS-MESSAGE'
}

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

    let stateCopy = {...state};
    stateCopy.messages = [...state.messages];

    switch (action.type) {
        case ACTION_TYPE.UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state}
            stateCopy.newDialogsMessage = action.body;
            return stateCopy;
        }
        case ACTION_TYPE.ADD_NEW_DIALOGS_MESSAGE:
            let stateCopy = {...state};
            let body = stateCopy.newDialogsMessage;
            stateCopy.newDialogsMessage = '';
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push({id: v1(), message: body});
            return stateCopy;
        default:
            return state;
    }
}
export const AddNewDialogsPageMessageAC = (newMessage: string) => {
    return {
        type: ACTION_TYPE.ADD_NEW_DIALOGS_MESSAGE,
        newMessage: newMessage
    } as const
}

export const updateNewDialogsPageMessageAC = (body: string) => {
    return {
        type: ACTION_TYPE.UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

export default dialogsReducer;