import * as ActionType from "./constants"
import { api } from "../../../../../utils/apiUtils"

export const actFetchToDoList = () => {
    return (dispatch) => {
        dispatch(actGetToDoListRequest())
        api
        .get("GetAllTask")
        .then((result) => {
            dispatch(actGetToDoListSuccess(result.data))
        })
        .catch((error) => {
            dispatch(actGetToDoListFail(error))
        })
    }
}

const actGetToDoListRequest = () => {
    return{
        type: ActionType.GET_TODOLIST_REQUEST
    }
}
const actGetToDoListSuccess = (data) => {
    return{
        type: ActionType.GET_TODOLIST_SUCCESS,
        payload: data
    }
}
const actGetToDoListFail = (err) => {
    return{
        type: ActionType.GET_TODOLIST_FAILED,
        payload: err
    }
}