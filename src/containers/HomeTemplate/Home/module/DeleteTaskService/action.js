import { api } from "../../../../../utils/apiUtils"
import * as ActionType from "./constants"

export const actDeleteTask = (task) => {
    return (dispatch) => {
        dispatch(actDeleteTaskRequest())
        api
        .delete(`deleteTask?taskName=${task}`)
        .then((result) => {
            dispatch(actDeleteTaskSuccess(result.data))
            console.log(result.data)
        })
        .catch((error) => {
            dispatch(actDeleteTaskFailed(error))
            console.log(error)
        })
    }
}

const actDeleteTaskRequest = () => {
    return{
        type: ActionType.DELETE_TASK_REQUEST
    }
}

const actDeleteTaskSuccess = (data) => {
    return{
        type: ActionType.DELETE_TASK_SUCCESS,
        payload: data
    }
}

const actDeleteTaskFailed = (error) => {
    return{
        type: ActionType.DELETE_TASK_FAILED,
        payload: error
    }
}