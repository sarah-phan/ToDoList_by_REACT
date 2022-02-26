import * as ActionType from "./constants"
import { api } from "../../../../../utils/apiUtils"

export const actChangeTaskUncomplete = (task) => {
    return (dispatch) => {
        dispatch(actChangeTaskUncompleteRequest())
        api
        .put(`rejectTask?taskName=${task}`) 
        .then((result) => {
            dispatch(actChangeTaskUncompleteSuccess(result.data))
        }) 
        .catch((error) => {
            dispatch(actChangeTaskUncompleteFailed(error))
        }) 
    }
}

const actChangeTaskUncompleteRequest = () => {
    return{
        type: ActionType.CHANGE_TASK_UNCOMPLETE_REQUEST
    }
}
const actChangeTaskUncompleteSuccess = (data) => {
    return{
        type: ActionType.CHANGE_TASK_UNCOMPLETE_SUCCESS,
        payload: data
    }
}
const actChangeTaskUncompleteFailed = (error) => {
    return{
        type: ActionType.CHANGE_TASK_UNCOMPLETE_FAILED,
        payload: error
    }
}