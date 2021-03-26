import React, {ChangeEvent, useEffect} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";
import { Redirect } from 'react-router-dom';

type PropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateNewDialogsPageMessage: (text: string) => void
    isAuth: boolean
}

const Dialogs: React.FC<PropsType> = (props) => {
    useEffect(() => {document.title = 'Messages'}, [])

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id} key={m.id}/>);
    let newMessageBody = state.newDialogsMessage

    let onSendMessage = () => {
        props.sendMessage();
    }
    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewDialogsPageMessage(body)
    }

    if(props.isAuth){
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea value={newMessageBody}
                          onChange={onMessageChange}
                          placeholder={'Enter your message...'}/>
                <button onClick={onSendMessage}>Add</button>
            </div>
        </div>
    )
}

export default Dialogs;