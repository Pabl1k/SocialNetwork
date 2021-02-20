import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";

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

/*type ProfileContainerType = {
    setUserProfile: (profile: any) => void
    profile: any
}*/

type MapStateToPropsType = {
    profile: AxiosType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: any) => void
}
type ProfileContainerType = MapStateToPropsType & MapDispatchToPropsType

export class ProfileContainer extends React.Component<ProfileContainerType>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2` )
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

let MapStateToProps = (state: any): MapStateToPropsType => ({
    profile: state.profilePage.profile
});

connect(MapStateToProps, {setUserProfile})(ProfileContainer);