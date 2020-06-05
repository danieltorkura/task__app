import React, {createContext, useState} from "react"
import {v4 as uuidv4} from 'uuid'

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
   const [tasks, setTask] = useState([
       {title: 'Read about existentialism', id: 1},
       {title: 'Read about Nihilism', id: 2},
       {title: 'Read about eugenics', id: 3},
   ])

   const [editItem, setEditItem] = useState([])

   const addTask = (title) => {
        setTask([...tasks, {title, id: uuidv4() }])
   }

   const removeTask = (id) => {
       setTask(tasks.filter(task => task.id !== id ))
   }

   const clearTask = () => {
       setTask([])
   }

   const findItem = (id) => {
       const item = tasks.find(task => task.id === id)
       setEditItem(item)
   }

   const editTask = (title, id) => {
    const newTasks = tasks.map(task => (task.id === id ? {title, id}: task))

    setTask(newTasks)
    setEditItem(null)
   }

   return (
       <TaskListContext.Provider value={{tasks, addTask, removeTask, clearTask, findItem, editTask, editItem}}>
           {props.children}
       </TaskListContext.Provider>
   )
}


export default TaskListContextProvider