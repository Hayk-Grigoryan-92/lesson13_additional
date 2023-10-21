import React from "react"

const initialState = {
    users: []
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_USSER': {
            return { ...state, users: [...state.users, action.payload] }
        }

        default:
            return state
    }
}