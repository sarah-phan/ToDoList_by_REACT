import axios from "axios";

export const api = axios.create({
    baseURL: "http://svcy.myclass.vn/api/ToDoList/",
})