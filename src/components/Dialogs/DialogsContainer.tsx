import React from 'react';
import {StoreType} from "../../redux/store";
import {AddNewDialogsPageMessageAC, updateNewDialogsPageMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type PropsType = {
    store: StoreType
}

export const DialogsContainer: React.FC<PropsType> = (props) => {

    let state = props.store.getState().dialogsPage

    let onSendMessage = () => {
        props.store.dispatch(AddNewDialogsPageMessageAC)
    }
    let onMessageChange = (body: string) => {
        props.store.dispatch(updateNewDialogsPageMessageAC(body))
    }

    return (
        <Dialogs dialogsPage={state} updateNewDialogsPageMessageAC={onMessageChange} sendMessage={onSendMessage}/>
    )
}