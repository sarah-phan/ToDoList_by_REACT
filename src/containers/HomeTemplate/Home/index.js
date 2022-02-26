import React, { useEffect, useState } from 'react'
import "./style.css"
import { actFetchToDoList } from "./module/GetTaskService/action"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { actAddTask } from "./module/AddTaskService/action"
import { actDeleteTask } from "./module/DeleteTaskService/action"
import { actChangeTaskComplete } from './module/ChangeTaskComplete/action'
import { actChangeTaskUncomplete } from './module/ChangeTaskUncomplete/action'

export default function Home() {
  // render task
  const data = useSelector(state => state.getToDoListReducer.data)
  // add task
  const dataAddTask = useSelector(state => state.addTaskReducer.data)
  const errorAddTask = useSelector(state => state.addTaskReducer.error)
  // delete task
  const dataDeleteTask = useSelector(state => state.deleteTaskReducer.data)
  const errorDeleteTask = useSelector(state => state.deleteTaskReducer.error)
  // change task to complete
  const dataChangeTaskComplete = useSelector(state => state.changeTaskCompleteReducer.data)
  const errorChangeTaskComplete = useSelector(state => state.changeTaskCompleteReducer.error)
  // change task to uncomplete
  const dataChangeTaskUncomplete = useSelector(state => state.changeTaskUncompleteReducer.data)
  const errorChangeTaskUncomplete = useSelector(state => state.changeTaskUncompleteReducer.error)

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
              {/* Bắt buộc phải có type để cho react biết đây là button, ko phải submit */}
              <button
                className="remove"
                type='button'
                onClick={() => handleDelete(todolist.taskName)}
                data-toggle="modal"
                data-target="#modalMessage"
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button className="edit">
                <i className="fa fa-edit" />
              </button>
              <button
                className="complete"
                type='button'
                onClick={() => changeTaskComplete(todolist.taskName)}
                data-toggle="modal"
                data-target="#modalMessage"
              >
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
              <button
                className="remove"
                type='button'
                onClick={() => handleDelete(todolist.taskName)}
                data-toggle="modal"
                data-target="#modalMessage"
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button className="edit">
                <i className="fa fa-edit" />
              </button>
              <button
                className="complete"
                type='button'
                onClick={() => changeTaskUncomplete(todolist.taskName)}
                data-toggle="modal"
                data-target="#modalMessage"
              >
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
    const { name, value } = event.target
    setTask({
      ...task,
      [name]: value
    })
  }
  const handleSubmit = () => {
    dispatch(actAddTask(task))
  }

  // delete task
  const handleDelete = (taskName) => {
    // console.log(taskName)
    dispatch(actDeleteTask(taskName))
  }

  const showMessage = () => {
    let message = ""
    if (dataDeleteTask !== null) {
      message = dataDeleteTask
    }
    if (errorDeleteTask !== null) {
      message = errorDeleteTask
    }
    if (dataChangeTaskComplete !== null) {
      message = dataChangeTaskComplete
    }
    if (errorChangeTaskComplete !== null) {
      message = errorChangeTaskComplete
    }
    if (dataChangeTaskUncomplete !== null){
      message = dataChangeTaskUncomplete
    }
    if (errorChangeTaskUncomplete !== null){
      message = errorChangeTaskUncomplete
    }
    return message
  }

  // Change todo to complete
  const changeTaskComplete = (taskName) => {
    dispatch(actChangeTaskComplete(taskName))
  }
  // Change complete to todo
  const changeTaskUncomplete = (taskName) => {
    // console.log(123)
    dispatch(actChangeTaskUncomplete(taskName))
  }
  return (
    <div className="card">
      <div className="card__header">
        <img src={require('./X2oObC4.png')} />
      </div>
      <form onSubmit={handleSubmit}>
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
                onChange={handleOnChange}
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
      <div className="modal fade" id="modalMessage">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              {showMessage()}
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-secondary" data-dismiss="modal" onClick={() => {
                window.location.reload(false)
              }}>Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
