import React from 'react'
import Task from './Task'

const Tasks = ({tasks,deleteTask,toggleDone}) => {

  return (
    <div>
        {
            tasks.map((x,i)=>{
                return(<Task task= {x} deleteTask={deleteTask} toggleDone={toggleDone}></Task>
                )
            })
        }
        
    </div>
  )
}

export default Tasks