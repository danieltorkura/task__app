import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../Contexts/TaskListContext'



function TaskForm() {

    const { addTask, clearTask, editTask, editItem } = useContext(TaskListContext)
    const [title, setTitle] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!editItem) {
            addTask(title)
            setTitle('')
        } else {
            editTask(title, editItem.id)
        }

    }

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    useEffect(() => {
        if (editItem) {
            setTitle(editItem.title)
        } else {
            setTitle('')
        }
    }, [editItem])

    return (
        <div>
            <form onSubmit={handleSubmit} className='form'>
                <input onChange={handleChange}
                    value={title}
                    type='text'
                    placeholder='Add a task bro'
                    className='task-input'
                    required />
                <div className='buttons'>
                    <button type='submit' className='btn add-task-btn'>
                        {editItem ? ("Edit Task") : ("Add Task")   }
                    </button>
                    <button onClick={() => clearTask()} className='btn clear-btn'>
                        Clear
                    </button>
                </div>
            </form>
        </div>
    )
}


export default TaskForm