import {v1} from "uuid";
import {DialogsPageType} from "./store";

export enum DIALOGS_ACTION_TYPE {
    ADD_NEW_DIALOGS_MESSAGE = 'ADD-NEW-DIALOGS-MESSAGE',
}

type AddNewDispatchType = {
    type: DIALOGS_ACTION_TYPE.ADD_NEW_DIALOGS_MESSAGE
    newDialogsMessage: string
}

export type DialogsDispatchType = AddNewDispatchType

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
}

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsDispatchType) => {
    switch (action.type) {
        case DIALOGS_ACTION_TYPE.ADD_NEW_DIALOGS_MESSAGE:
            let body = action.newDialogsMessage;
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: body}]
            };
        default:
            return state;
    }
}
export const AddNewDialogsPageMessageAC = (newDialogsMessage: string):AddNewDispatchType => {
    return {
        type: DIALOGS_ACTION_TYPE.ADD_NEW_DIALOGS_MESSAGE,
        newDialogsMessage
    } as const
}

export default dialogsReducer;