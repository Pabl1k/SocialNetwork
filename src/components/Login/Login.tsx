import React, {useEffect} from "react";
import style from "./Login.module.css"
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../Common/FormsControl/FormsControl";
import {required} from "../../utils/validation/Validators";

export const Login = () => {
    useEffect(() => {
        document.title = 'Login'
    }, [])

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div className={style.loginPage}>
            <h1 className={style.login}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'}
                           name={'login'}
                           component={Input}
                           validate={[required]}
                    />
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]} /> {/*type={'password'}*/}
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={Input} validate={[required]}/> remember me
                </div>
                <div>
                    <button className={style.button}>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)