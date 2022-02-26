import { api } from "../../../../../utils/apiUtils"
import * as ActionType from "./constants"

export const actChangeTaskComplete = (task) => {
    return (dispatch) => {
        dispatch(actChangeTaskCompleteRequest())
        api
        .put(`doneTask?taskName=${task}`)
        .then((result) => {
            dispatch(actChangeTaskCompleteSuccess(result.data))
        })
        .catch((error) => {
            dispatch(actChangeTaskCompleteFailed(error))
        })
    }
}

const actChangeTaskCompleteRequest = () => {
    return{
        type: ActionType.CHANGE_TASK_COMPLETE_REQUEST
    }
}
const actChangeTaskCompleteSuccess = (data) => {
    return{
        type: ActionType.CHANGE_TASK_COMPLETE_SUCCESS,
        payload: data
    }
}
const actChangeTaskCompleteFailed = (error) => {
    return{
        type: ActionType.CHANGE_TASK_COMPLETE_FAILED,
        payload: error
    }
}