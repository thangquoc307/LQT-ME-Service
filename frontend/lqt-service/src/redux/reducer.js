import {typeAction} from "./action";

const initialState = {
    chatCustomer: -1,
    modal: -1,
    level: -1,
    room: -1,
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case typeAction(0):
            return {
                ...state,
                chatCustomer: action.payload
            }
        case typeAction(1):
            return {
                ...state,
                modal: action.payload
            }
        case typeAction(2):
            return {
                ...state,
                level: action.payload
            }
        case typeAction(3):
            return {
                ...state,
                room: action.payload
            }
        default:
            return state;
    }
}