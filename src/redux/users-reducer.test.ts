import usersReducer, {followAC, setUsersAC, unfollowAC, UsersReducerType} from "./users-reducer";

let startState: UsersReducerType

beforeEach( () => {
    startState = {
        users: []
    }
})

test('status should be changed to Follow', () => {
    const action = followAC('1')
    const endState = usersReducer(startState, action)

    expect(endState.users).toBeTruthy()
})

test('status should be changed to unfollow', () => {
    const action = unfollowAC('321')
    const endState = usersReducer(startState, action)
    expect(endState.users).toBeUndefined()
})

/*
test('users should be added in array', () => {
    const action = setUsersAC('')
    const endState = usersReducer(startState, action)
})
*/
