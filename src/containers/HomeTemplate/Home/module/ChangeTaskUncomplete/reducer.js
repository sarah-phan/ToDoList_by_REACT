import * as ActionType from "./constants"

const initialState = {
    data: null,
    error: null
}

export const changeTaskUncompleteReducer = (state = initialState, action) => {
    switch(action.type){
        case(ActionType.CHANGE_TASK_UNCOMPLETE_REQUEST):{
            state.data = null;
            state.error = null;
            return {...state}
        }
        case(ActionType.CHANGE_TASK_UNCOMPLETE_SUCCESS):{
            state.data = action.payload;
            state.error = null;
            return {...state}
        }
        case(ActionType.CHANGE_TASK_UNCOMPLETE_FAILED):{
            state.data = null;
            state.error = action.payload;
            return {...state}
        }
        default:
            return {...state}
    }
}