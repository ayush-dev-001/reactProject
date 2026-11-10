import React from 'react'
import TaskCard from '../Others/TaskCard.jsx'

const Tasklist = () => {
  return (
    <div className="hide-scrollbar mt-2 flex w-full min-h-0 flex-1 items-center gap-5 overflow-x-auto scroll-smooth [&>*]:shrink-0">
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
    </div>
  )
}

export default Tasklist