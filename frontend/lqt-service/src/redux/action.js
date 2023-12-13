export const typeAction = (index) => {
    let array = [
        "selectChatCustomer",
        "setModalType",
        "setLevel",
        "setRoom",
        "setAccount"
    ]
    return array[index];
}
export const selectChatCustomer = (customerId) => {
    return {
        type: typeAction(0),
        payload: customerId
    }
}
export const setModalType = (modalType) => {
    return {
        type: typeAction(1),
        payload: modalType
    }
}
export const setLevel = (level) => {
    return {
        type: typeAction(2),
        payload: level
    }
}
export const setRoom = (room) => {
    return {
        type: typeAction(3),
        payload: room
    }
}