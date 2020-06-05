import React, {useContext} from "react"
import {TaskListContext} from '../Contexts/TaskListContext'


const Task = ({task}) => {


    const {findItem, removeTask} = useContext(TaskListContext)
    


    const handleRemoval = (e) => {
        removeTask(task.id)
    }

    return (
        <div>
            <li className="list-item">
                <span>{task.title}</span>
                <div>
                    <button onClick={handleRemoval} className='btn-delete task-btn'>
                        <i className='fas fa-trash-alt'></i>
                    </button>
                    <button onClick={() => findItem(task.id)}  className='btn-edit task-btn'>
                        <i className='fas fa-pen'></i>
                    </button>
                </div>
            </li>
        </div>
    )
}


export default Task