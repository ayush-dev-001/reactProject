import React from 'react'

const Header = () => {
  return (
    <>
    <header className="flex w-full items-center justify-between border-b border-slate-200 bg-white px-6 py-4 font-['Roboto',sans-serif] shadow-sm">
      <div className="text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
        Employee Management System
      </div>
      <button className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2">
        Logout
      </button>
    </header>
    </>
  )
}

export default Header