export const InitialData = { results: [], loading: false, error: false, text: '', startIndex: 0 };

export const StoreReducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_DATA":
            return {
                ...state,
                results: action.payload,
                startIndex: action.index
            };
        case "LOADING":
            return {
                ...state,
                loading: true,
            };
        case "END_LOADING":
            return {
                ...state,
                loading: false,
            };
        case "ERROR":
            return {
                ...state,
                error: true,
                loading: false,
            };
        case "TEXT_SEARCH_CHANGE":
            return {
                ...state,
                text: action.payload
            };
        default:
            return state;
    }
};