const initialState = {
    logIn: false,
    register: false,
    headerDropdown: false,
    headerScroll: false
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
        case 'HEADER_DROPDOWN':
            return {
                ...state,
                headerDropdown: !state.headerDropdown
            }
        case 'HEADER_SCROLL':
            return {
                ...state,
                headerScroll: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
