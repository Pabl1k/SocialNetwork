import React, {ComponentType} from 'react';
import {AddNewDialogsPageMessageAC, updateNewDialogsPageMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from 'redux';

let MapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsReducer,

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

export default compose<ComponentType>(
    connect(MapStateToProps, MapDispatchToProps),
    withAuthRedirect
)(Dialogs)