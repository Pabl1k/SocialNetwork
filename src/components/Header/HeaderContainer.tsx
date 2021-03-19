import React from 'react';
import Header, {HeaderType} from "./Header";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {getAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component<any> {
    componentDidMount() {
        this.props.getAuthUserData()
    }
    render() {
        return <Header {...this.props as HeaderType} />
    }
}

const MapStateToProps = (state: RootStateType) =>( {
    isAuth: state.auth.isAuth,
    login: state.auth.login
} )

export default connect(MapStateToProps, {getAuthUserData})(HeaderContainer);