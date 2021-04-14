import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

let MapStateToProps = (state: RootStateType) => {
    return {
        profilePage: state.profileReducer
    }
}
let MapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPost: string) => {
            dispatch(addPostAC(newPost))
        }
    }
}

export const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)