import * as ActionType from "./constants"

const initialState = {
    data: null,
    error: null,
}

export const changeTaskCompleteReducer = (state = initialState, action) => {
    switch(action.type){
        case(ActionType.CHANGE_TASK_COMPLETE_REQUEST):{
            state.data = null;
            state.error = null;
            return {...state}
        }
        case(ActionType.CHANGE_TASK_COMPLETE_SUCCESS):{
            state.data = action.payload
            state.error = null
            return {...state}
        }
        case(ActionType.CHANGE_TASK_COMPLETE_FAILED):{
            state.data = null;
            state.error = action.payload
            return {...state}
        }
        default:
            return{...state}
    }
}