import React from "react";
import styles from './FormsControl.module.css';

export const Textarea = ({input, meta, ...props}: any) => {
    debugger
    const showError = meta.touched && meta.error
    return <>
        <div className={styles.formControl + ' ' + (showError ? styles.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {showError ? <span>{meta.error}</span> : ''}
        </div>
    </>
}

export const Input = ({input, meta, ...props}: any) => {
    debugger
    const showError = meta.touched && meta.error
    return <>
        <div className={styles.formControl + ' ' + (showError ? styles.error : '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            {showError ? <span>{meta.error}</span> : ''}
        </div>
    </>
}