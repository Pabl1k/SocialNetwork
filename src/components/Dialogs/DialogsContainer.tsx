import React from 'react';
import {AddNewDialogsPageMessageAC, updateNewDialogsPageMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let MapStateToProps = (state: any) => {
    return{
        dialogsPage: state.dialogsReducer
    }
}
let MapDispatchToProps = (dispatch: any) => {
    return {
        updateNewDialogsPageMessageAC: (body: string) => {
            dispatch(updateNewDialogsPageMessageAC(body))
        },
        sendMessage: () => {
            dispatch(AddNewDialogsPageMessageAC)
        }
    }
}

export const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs)