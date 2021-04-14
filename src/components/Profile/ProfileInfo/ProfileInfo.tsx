import React, {useEffect} from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../Common/Preloader/Preloader";
import {AxiosType} from "../ProfileContainer";
import {ProfileStatus} from './ProfileStatus';

type PropsType = {
    profile: AxiosType | null
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: PropsType) => {
    useEffect(() => {
        document.title = document.title = props.profile?.fullName === undefined
            ? 'page loading'
            : `${props.profile?.fullName}`
    }, [props.profile?.fullName]);
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large
                    ? props.profile.photos.large
                    : 'data:image/png;base64,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'}
                     alt='profile image'
                     title={props.profile.photos.large
                         ? "user's photo"
                         : "user do not loaded a photo"}/>

                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

                <u><h2>{props.profile.fullName}</h2></u>
                <div>{props.profile.aboutMe}</div>

                <span className={s.subject}>Looking for a job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</span>

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