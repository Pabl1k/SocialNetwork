import React from 'react';
import {AddNewDialogsPageMessageAC, updateNewDialogsPageMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().dialogsPage

                let onSendMessage = () => {
                    store.dispatch(AddNewDialogsPageMessageAC)
                }
                let onMessageChange = (body: string) => {
                    store.dispatch(updateNewDialogsPageMessageAC(body))
                }
                return (
                    <Dialogs dialogsPage={state} updateNewDialogsPageMessageAC={onMessageChange}
                             sendMessage={onSendMessage}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
}