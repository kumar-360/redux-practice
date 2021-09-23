const initial = false;
const loggedReducer = (initialState=initial, action) => {
    switch (action.type) {
        case 'LOGIN':
            return !initialState
        default:
            return initialState
    }
}

export default loggedReducer;