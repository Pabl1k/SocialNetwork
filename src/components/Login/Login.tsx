import React, {useEffect} from "react";
import style from "./Login.module.css"
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControl/FormsControl";
import {required} from "../../utils/validation/Validators";
import {connect} from "react-redux";
import {loginUserTC} from "../../redux/auth-reducer";
import {RootStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import s from '../Common/FormsControl/FormsControl.module.css'

type LoginFormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className={style.email}>
                    <Field placeholder={'Email'}
                           name={'email'}
                           component={Input}
                           validate={[required]}
                           value='pavezap@gmail.com'
                    /> pavezap@gmail.com
                </div>
                <div className={style.password}>
                    <Field placeholder={'Password'}
                           name={'password'}
                           type={'password'}
                           component={Input}
                           validate={[required]}
                           value='parolOtServira'
                    /> parolOtServira
                </div>
                <div>
                    <Field type={'checkbox'}
                           name={'rememberMe'}
                           component={Input}
                           />remember me
                </div>
                { props.error && <div className={s.form_summary_error}>
                    {props.error}
                </div>}
                <div>
                    <button className={style.button}>Login</button>
                </div>
            </form>
        </div>
    )
}
const LoginReduxForm = reduxForm<LoginFormDataType>({form: 'login'})(LoginForm)

type LoginPropsType = {
    isAuth: boolean
    loginUserTC: (email: string, password: string, rememberMe: boolean) => void
}

const Login = (props: LoginPropsType) => {
    useEffect(() => {
        document.title = 'Login'
    }, [])

    const onSubmit = (data: LoginFormDataType) => {
        props.loginUserTC(data.email, data.password, data.rememberMe)
    }
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={style.loginPage}>
            <h1 className={style.login}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {loginUserTC})(Login)