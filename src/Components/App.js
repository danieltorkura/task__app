import React from "react";
import TaskList from './Tasklist'
import TaskForm from './TaskForm'
import Header from './Header'
import TaskListContextProvider from '../Contexts/TaskListContext'

import '../App.css';

function App() {
    return (
        <TaskListContextProvider>
            <div className='container'>
                <div className='app-wrapper'>
                    <Header />
                    <div className='main'>

                        <TaskForm />
                        <TaskList />
                    </div>
                </div>

            </div>
        </TaskListContextProvider>
    )
}


export default App 