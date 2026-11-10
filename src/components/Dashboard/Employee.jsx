import React from 'react'
import { useState } from 'react'
import Header from '../Others/Header.jsx'
import TaskListNumbers from '../Others/TaskListNumbers.jsx'
import TaskCard from '../Others/TaskCard.jsx'
import Tasklist from '../Task/Tasklist.jsx'


const Employee = () => {
    const [user,setUser]=useState("User");

  return (
      <div className="flex flex-col overflow-hidden bg-[#1c1c1c]" style={{ height: '100dvh' }}>
      <Header />
      <div className="flex w-full min-h-0 flex-1 flex-col gap-2 px-4 py-2 text-white">
        <div className="flex items-baseline gap-2 whitespace-nowrap">
          <span className="text-xl">Hii,</span>
          <span className="text-3xl font-bold">{user}<span aria-hidden="true">👋</span></span>
        </div>
        <TaskListNumbers />
        <Tasklist/>
      </div>
      </div>
  )
}

export default Employee