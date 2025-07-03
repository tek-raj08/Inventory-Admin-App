import { BASE_URL } from "./constant.js"

export const addItem = (item) => async (dispatch) => {
    try {
        const response = await fetch(`${BASE_URL}/add-to-store`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json()
        // console.log(data)

        if (data) {

            dispatch({ type: "ADD_ITEMS_SUCCESS", payload: data })
        }

    } catch (error) {
        console.error("Error adding item:", error)
    }
}

export const fetchInventory = () => async (dispatch) => {
    try {
        const response = await fetch(`${BASE_URL}/inventory-items`)

        const data = await response.json();
        if (data) {
            dispatch({ type: "FETCH_ITEMS_SUCCESS", payload: data.data })
        }

    } catch (err) {
        console.error("Error fetching items: ", err)
    }
}

export const fetchRemovedItems = () => async (dispatch) => {
    try {
        const response = await fetch(`${BASE_URL}/dispatched-from-store`)

        const data = await response.json();
        if (data) {
            dispatch({ type: "FETCH_REMOVE_ITEMS_SUCCESS", payload: data.data })
        }

    } catch (err) {
        console.error("Error fetching dispatched items: ", err)
    }
}