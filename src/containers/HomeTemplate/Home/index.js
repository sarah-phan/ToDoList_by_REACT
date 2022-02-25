import React, { useEffect, useState } from 'react'
import "./style.css"
import { actFetchToDoList } from "./module/GetTaskService/action"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {actAddTask} from "./module/AddTaskService/action"

export default function Home() {
  // render task
  const data = useSelector(state => state.getToDoListReducer.data)
  // add task
  const dataAddTask = useSelector(state => state.addTaskReducer.data)

  const dispatch = useDispatch()

  // The [] means everytime what's inside those brackets change it will run the function inside the useEffect. 
  // In your state so eveytime a new result comes in it will run the effect, the effect get a new result 
  // everytime thus causing that infinite call.
  useEffect(() => {
    dispatch(actFetchToDoList())
  }, [])

  // render task
  const renderToDoTask = () => {
    return data?.map((todolist) => {
      if (!todolist.status) {
        return (
          <li>
            <span>{todolist.taskName}</span>
            <div className="buttons">
              <button className="remove">
                <i className="fa fa-trash-alt" />
              </button>
              <button className="edit">
                <i className="fa fa-edit" />
              </button>
              <button className="complete">
                <i className="far fa-check-circle" />
                <i className="fas fa-check-circle" />
              </button>
            </div>
          </li>
        )
      }
    })
  }

  const renderCompletedTask = () => {
    return data?.map((todolist) => {
      if (todolist.status) {
        return (
          <li>
            <span>{todolist.taskName}</span>
            <div className="buttons">
              <button className="remove">
                <i className="fa fa-trash-alt" />
              </button>
              <button className="edit">
                <i className="fa fa-edit" />
              </button>
              <button className="complete">
                <i className="far fa-check-circle" />
                <i className="fas fa-check-circle" />
              </button>
            </div>
          </li>
        )
      }
    })
  }

  // add task
  const [task, setTask] = useState({
    taskName: "",
    status: false
  })

  const handleOnChange = (event) => {
    const {name, value} = event.target
    setTask({
      ...task,
      [name]: value
    })
  }
  const handleSubmit = () => {
    dispatch(actAddTask(task))
  }

  return (
    <div className="card">
      <div className="card__header">
        <img src={require('./X2oObC4.png')} />
      </div>
      <form onSubmit = {handleSubmit}>
        <div className="card__body">
          <div className="card__content">
            <div className="card__title">
              <h2>My Tasks</h2>
              <p>September 9,2020</p>
            </div>
            <div className="card__add">
              <input 
              id="newTask" 
              type="text" 
              placeholder="Enter an activity..."
              name="taskName"
              onChange = {handleOnChange}
              />
              <button type="submit" id="addItem">
                <i className="fa fa-plus" />
              </button>
            </div>
            <span id="announce" />
            <div className="card__todo">
              <ul className="todo" id="todo">
                {renderToDoTask()}
              </ul>
              <ul className="todo" id="completed">
                {renderCompletedTask()}
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>

  )
}
