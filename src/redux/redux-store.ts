import {combineReducers, createStore} from 'redux';
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

//export type dispatchType = (action: actionType) => void

const reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer
});

let store = createStore(reducers);

export default store;
//@ts-ignore
window.store = store