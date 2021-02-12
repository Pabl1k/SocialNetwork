import {v1} from "uuid";
import {DialogsPageType} from "./store";

export enum DIALOGS_ACTION_TYPE {
    ADD_NEW_DIALOGS_MESSAGE = 'ADD-NEW-DIALOGS-MESSAGE',
    UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-DIALOGS-MESSAGE'
}

type AddNewDispatchType = {
    type: DIALOGS_ACTION_TYPE.ADD_NEW_DIALOGS_MESSAGE
}

type UpdateNewDispatchType = {
    type: DIALOGS_ACTION_TYPE.UPDATE_NEW_MESSAGE_BODY
    body: string
}

export type DialogsDispatchType = AddNewDispatchType | UpdateNewDispatchType

type DialogsUsersType = {
    id: string
    name: string
}
type MessageType = {
    id: string
    message: string
}
type DialogsStateType = {
    dialogs: Array<DialogsUsersType>
    messages: Array<MessageType>
    newDialogsMessage: string
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

const dialogsReducer = (state: DialogsPageType = initialState, action: any) => {
    switch (action.type) {
        case DIALOGS_ACTION_TYPE.UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newDialogsMessage: action.body
            };
        }
        case DIALOGS_ACTION_TYPE.ADD_NEW_DIALOGS_MESSAGE:
            let stateCopy = {...state};
            let body = stateCopy.newDialogsMessage;
            return {
                ...state,
                newDialogsMessage: '',
                messages: [...state.messages, {id: v1(), message: body}]
            };
        default:
            return state;
    }
}
export const AddNewDialogsPageMessageAC = ():AddNewDispatchType => {
    return {
        type: DIALOGS_ACTION_TYPE.ADD_NEW_DIALOGS_MESSAGE
    } as const
}
export const updateNewDialogsPageMessageAC = (body: string): UpdateNewDispatchType => {
    return {
        type: DIALOGS_ACTION_TYPE.UPDATE_NEW_MESSAGE_BODY,
        body: body
    } as const
}

export default dialogsReducer;