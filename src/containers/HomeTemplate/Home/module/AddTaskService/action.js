import * as ActionType from "./constant"
import { api } from "../../../../../utils/apiUtils"

export const actAddTask = (task) => {
    return (dispatch) => {
        dispatch(actAddTaskRequest())
        api
        .post("AddTask", task)
        .then((result) => {
            dispatch(actAddTaskSuccess(result.data))
        })
        .catch((error) => {
            dispatch(actAddTaskFailed(error))
        })
    }
}

const actAddTaskRequest = () => {
    return{
        type: ActionType.ADD_TASK_REQUEST
    }
}
const actAddTaskSuccess = (data) => {
    return{
        type: ActionType.ADD_TASK_SUCCESS,
        payload: data
    }
}
const actAddTaskFailed = (error) => {
    return{
        type: ActionType.ADD_TASK_FAILED,
        payload: error
    }
}