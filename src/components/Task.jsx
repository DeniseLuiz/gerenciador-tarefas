import React from 'react'
import "./Task.css"

const Task = ({task}) => {
  return ( 
    <>
      <div className='task__container'>{task.title}</div>
    </>
  );
}
 
export default Task;