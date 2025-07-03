const initialState = {
    inventory: [],
    removeItems: [],
    remainingItems: []
}

const ItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ITEMS_SUCCESS":
            return {
                ...state,
                inventory: action.payload
            }
        case "FETCH_REMOVE_ITEMS_SUCCESS":
            return {
                ...state,
                removeItems: action.payload
            }
        case "FETCH_REMAINING_ITEMS_SUCCESS":
            return {
                ...state,
                remainingItems: action.payload
            }
        case "ADD_ITEMS_SUCCESS":
            if (action.payload.entryType === "addToStorage") {
                return {
                    ...state,
                    inventory: [...state.inventory, action.payload]
                }
            } else {
                return {
                    ...state,
                    removeItems: [...state.removeItems, action.payload]
                }
            }
        default:
            return state

    }
}

export default ItemReducer