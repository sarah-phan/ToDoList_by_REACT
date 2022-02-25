import * as ActionType from "./constants"

const initialState = {
    data: null,
    error: null
}

export const getToDoListReducer = (state = initialState, action) => {
    switch(action.type){
        case(ActionType.GET_TODOLIST_REQUEST):{
            state.data = null;
            state.error = null;
            return {...state}
        }
        case(ActionType.GET_TODOLIST_SUCCESS):{
            state.data = action.payload;
            state.error = null;
            return {...state}
        }
        case(ActionType.GET_TODOLIST_FAILED):{
            state.data = null;
            state.data = action.payload
            return {...state}
        }
        default:
            return {...state}
    }
}