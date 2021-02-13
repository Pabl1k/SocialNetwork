import React from 'react';
import {AddNewDialogsPageMessageAC, updateNewDialogsPageMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";

let MapStateToProps = (state: RootStateType)  => {
    return{
        dialogsPage: state.dialogsReducer
    }
}
let MapDispatchToProps = (dispatch: any) => {
    return {
        sendMessage: () => {
            dispatch(AddNewDialogsPageMessageAC())
        },
        updateNewDialogsPageMessage: (body: string) => {
            dispatch(updateNewDialogsPageMessageAC(body))
        }
    }
}

export const DialogsContainer = connect(MapStateToProps, MapDispatchToProps)(Dialogs)