import React, {ComponentType} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {RootStateType} from "./redux/redux-store";
import {Preloader} from "./components/Common/Preloader/Preloader";

type AppPropsType = MapStateType & MapDispatchType

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

type MapStateType = {
    initialized: boolean
}

type MapDispatchType = {
    initializeApp: () => void
}

const mapStateToProps = (state: RootStateType): MapStateType => ({
    initialized: state.app.initialized
})

export default compose<ComponentType>(
    withRouter,
    connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, {initializeApp}))(App);