const initialState = {
    logIn: false,
    register: false,
    headerDropdown: false,
    headerScroll: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'AUTH_POPUP':
            return {
                ...state,
                logIn: action.payload.logIn,
                register: action.payload.register
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
