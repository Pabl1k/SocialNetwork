import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../Common/Preloader/Preloader";
import {AxiosType} from "../ProfileContainer";

type PropsType = {
    profile: AxiosType | null
}

const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img alt='image'
                     src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt='profile image'/>
                <u><h2>{props.profile.fullName}</h2></u>
                <div>{props.profile.aboutMe}</div>

                <span className={s.subject}>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</span>
                {/*<input type='checkbox' checked={props.profile.lookingForAJob}/>*/}

                <div className={s.subject}>My contacts:</div>
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.github}</div>
                <div>{props.profile.contacts.instagram}</div>
                <div>{props.profile.contacts.mainLink}</div>
                <div>{props.profile.contacts.twitter}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.contacts.youtube}</div>
                <div>{props.profile.contacts.website}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;