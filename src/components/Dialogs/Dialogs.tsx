import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/store";

type PropsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateNewDialogsPageMessageAC: (text: string) => void
}

const Dialogs: React.FC<PropsType> = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} id={m.id}/>);
    //let newMessageElementRef = React.createRef<HTMLTextAreaElement>();
    let newMessageBody = state.newDialogsMessage

    let onSendMessage = () => {
        props.sendMessage();
    }
    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewDialogsPageMessageAC(body)
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