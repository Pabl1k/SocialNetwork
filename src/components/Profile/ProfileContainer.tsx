import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {getStatus, setUserProfile, updateStatus, getUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {RootStateType} from "../../redux/redux-store";
import {profileAPI} from "../../API/api";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

export type AxiosType = {
    "aboutMe": string
    "contacts": {
        "facebook": string | null
        "website": string | null
        "vk": string | null
        "twitter": string | null
        "instagram": string | null
        "youtube": string | null
        "github": string | null
        "mainLink": string | null
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": string | null
    "fullName": string
    "userId": number
    "photos": {
        "small": string | undefined
        "large": string | undefined
    }
}

type PathParamType = {
    userId: string
}

type OwnProps = {}
type PropsType = RouteComponentProps<PathParamType> & MapDispatchToPropsType & MapStateToPropsType & OwnProps
type MapStateToPropsType = {
    profile: AxiosType | null
    status: string
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '1049';
        }
        this.props.getUserProfile(+userId)
        this.props.getStatus(+userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let MapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status
});

export default compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnProps, RootStateType>(MapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);