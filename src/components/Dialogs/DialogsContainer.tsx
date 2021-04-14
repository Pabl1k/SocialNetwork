import {ComponentType} from 'react';
import {AddNewDialogsPageMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose, Dispatch} from 'redux';

let MapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsReducer,

    }
}

let MapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(AddNewDialogsPageMessageAC(newMessageBody))
        }
    }
}

export default compose<ComponentType>(
    connect(MapStateToProps, MapDispatchToProps),
    withAuthRedirect
)(Dialogs)