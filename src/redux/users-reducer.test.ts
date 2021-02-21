import usersReducer, {follow, setUsers, unfollow, UsersReducerType, UsersStateType} from "./users-reducer";

let startState: UsersReducerType

/*beforeEach( () => {
        startState = {
            users: []
        }
    }
)*/

test('status should be changed to Follow', () => {
    const action = follow('1')
    const endState = usersReducer(startState, action)

    expect(endState.users[0]).toBeTruthy()
})

test('status should be changed to unfollow', () => {
    const action = unfollow('3')
    const endState = usersReducer(startState, action)
    expect(endState.users[2]).toBeFalsy()
})

/*
test('users should be added in array', () => {
    const action = setUsersAC('')
    const endState = usersReducer(startState, action)
})
*/
