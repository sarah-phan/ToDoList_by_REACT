import * as ActionType from "./constant"

const initialState = {
    data: null,
    error: null,
}

export const addTaskReducer = (state = initialState, action) => {
    switch(action.type){
        case (ActionType.ADD_TASK_REQUEST):{
            state.data = null;
            state.error = null;
            return {...state}
        }
        case (ActionType.ADD_TASK_SUCCESS):{
            state.data = action.payload;
            state.error = null;
            return {...state}
        }
        case (ActionType.ADD_TASK_FAILED):{
            state.data = null;
            state.error = action.payload;
            return {...state}
        }
        default:
            return {...state}
    }
}