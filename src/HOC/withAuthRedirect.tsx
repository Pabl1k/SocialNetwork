import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MapStateType = {
    isAuth: boolean | undefined
}

const mapStateToProps = (state: RootStateType): MapStateType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect <T>(Component: ComponentType<T>) {

    function RedirectComponent (props: MapStateType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T} />
    }

    return connect(mapStateToProps)(RedirectComponent)
}