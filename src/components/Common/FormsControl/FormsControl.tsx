import React, {InputHTMLAttributes} from "react";
import styles from './FormsControl.module.css';
import {WrappedFieldProps} from "redux-form";

export const Textarea = ({input, meta, ...props}: WrappedFieldProps) => {
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

export const Input = ({input, meta, ...props}: WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>) => {
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