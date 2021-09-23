const initial = {
    count: 0
}
const countReducer = (initialState = initial, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...initialState,
                count: initialState.count + action.payload
            }
        case 'DECREMENT':
            return {
                ...initialState,
                count: initialState.count - 1
            }
        default:
            return initialState
    }
}

export default countReducer;