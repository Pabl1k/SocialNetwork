import {ProfilePageType} from "./store";
import profileReducer, {addPostAC} from "./profile-reducer";

let startState: ProfilePageType

/*beforeEach(() => {
    startState = {
        posts: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 12},
            {id: v1(), message: 'It\'s my first post', likesCount: 11},
            {id: v1(), message: 'Blabla', likesCount: 11},
            {id: v1(), message: 'Dada', likesCount: 11}
        ],
        newPostText: ''
    }
})*/

// test('post should be added to posts array', () => {
//     const action = addPostAC();
//     const endState = profileReducer(startState, action);
//
//     expect(endState.posts.length).toBe(5)
// })
//
// test('', () => {
//     const action = updateNewPostTextPostAC('test');
//     const endState = profileReducer(startState, action);
//
//     expect(endState.newPostText).toBe('test')
// })