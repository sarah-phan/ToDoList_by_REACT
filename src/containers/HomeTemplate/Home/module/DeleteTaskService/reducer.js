import * as ActionType from "./constants"

const initialState = {
    data: null,
    error: null
}

export const deleteTaskReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionType.DELETE_TASK_REQUEST:{
            state.data = null
            state.error = null
            return {...state}
        }
        case ActionType.DELETE_TASK_SUCCESS:{
            state.data = action.payload
            state.error = null
            return {...state}
        }
        case ActionType.DELETE_TASK_FAILED:{
            state.data = null
            state.error = action.payload
            return {...state}
        }
        default:
            return {...state}
    }
}