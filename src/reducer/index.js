import { combineReducers } from "redux";
import { getToDoListReducer } from "../containers/HomeTemplate/Home/module/GetTaskService/reducer";
import { addTaskReducer } from "../containers/HomeTemplate/Home/module/AddTaskService/reducer";

export const rootReducer = combineReducers({
    getToDoListReducer,
    addTaskReducer
})