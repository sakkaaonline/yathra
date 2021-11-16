import { GETUSERS } from './types';

const initialState = {
    userslist: [],
}
const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case GETUSERS:
            return {
                ...state,
                userslist:action.payload
            }
        default:
            return state;
    }
}

export default postReducer;
