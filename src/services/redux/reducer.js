const initialState = {
    logIn: false,
    register: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_POPUP':
            return {
                ...state,
                logIn: !state.logIn,
                register: false
            }
        case 'REGISTER_POPUP':
            return {
                ...state,
                logIn: false,
                register: !state.register
            }
        default:
            return state;
    }
}

export default reducer;
