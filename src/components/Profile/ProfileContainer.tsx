import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {RootStateType} from "../../redux/redux-store";

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
type PropsType =RouteComponentProps<PathParamType> & MapDispatchToPropsType & MapStateToPropsType & OwnProps
type MapStateToPropsType = {
    profile: AxiosType | null
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: AxiosType | null) => void
}

 class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let MapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    profile: state.profileReducer.profile
});

export default withRouter(connect<MapStateToPropsType,MapDispatchToPropsType,OwnProps, RootStateType >(MapStateToProps, {setUserProfile})(ProfileContainer));