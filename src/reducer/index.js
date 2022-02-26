import { combineReducers } from "redux";
import { getToDoListReducer } from "../containers/HomeTemplate/Home/module/GetTaskService/reducer";
import { addTaskReducer } from "../containers/HomeTemplate/Home/module/AddTaskService/reducer";
import { deleteTaskReducer } from "../containers/HomeTemplate/Home/module/DeleteTaskService/reducer";
import { changeTaskCompleteReducer } from "../containers/HomeTemplate/Home/module/ChangeTaskComplete/reducer";
import { changeTaskUncompleteReducer } from "../containers/HomeTemplate/Home/module/ChangeTaskUncomplete/reducer";

export const rootReducer = combineReducers({
    getToDoListReducer,
    addTaskReducer,
    deleteTaskReducer,
    changeTaskCompleteReducer,
    changeTaskUncompleteReducer
})