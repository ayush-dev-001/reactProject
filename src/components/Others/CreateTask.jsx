import React from 'react'
import AdminHeader from './AdminHeader'

const CreateTask = () => {
   const [task, setTask] = React.useState({
    title: '',
    description: '',
    date: '',
    assignedTo: '',
    category: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setTask((currentTask) => ({ ...currentTask, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setTask({ title: '', description: '', date: '', assignedTo: '', category: '' })
  }

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-[#1c1c1c] text-white">
      <AdminHeader />
      <main className="flex flex-1 items-start justify-center overflow-y-auto px-6 py-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm space-y-4 border border-gray-700 bg-[#2c2c2c] p-6 rounded-lg shadow-md"

        >
          <div>
            <label htmlFor="task-title" className="mb-1 block text-sm text-gray-200">
              Task Title
            </label>
            <input
              id="task-title"
              name="title"
              type="text"
              value={task.title}
              onChange={handleChange}
              placeholder="Make a UI design"
              className="w-full rounded-md bg-[#303030] px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          <div>
            <label htmlFor="task-description" className="mb-1 block text-sm text-gray-200">
              Description
            </label>
            <textarea
              id="task-description"
              name="description"
              value={task.description}
              onChange={handleChange}
              placeholder="Detailed description of task (Max 500 words)"
              rows={3}
              className="w-full resize-none rounded-md bg-[#303030] px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          <div>
            <label htmlFor="task-date" className="mb-1 block text-sm text-gray-200">
              Date
            </label>
            <input
              id="task-date"
              name="date"
              type="date"
              value={task.date}
              onChange={handleChange}
              className="w-full rounded-md bg-[#303030] px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          <div>
            <label htmlFor="task-assignee" className="mb-1 block text-sm text-gray-200">
              Assign To
            </label>
            <input
              id="task-assignee"
              name="assignedTo"
              type="text"
              value={task.assignedTo}
              onChange={handleChange}
              className="w-full rounded-md bg-[#303030] px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          <div>
            <label htmlFor="task-category" className="mb-1 block text-sm text-gray-200">
              Category
            </label>
            <input
              id="task-category"
              name="category"
              type="text"
              value={task.category}
              onChange={handleChange}
              placeholder="Design, Development, etc..."
              className="w-full rounded-md bg-[#303030] px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-black px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-[#1c1c1c]"
          >
            Create Task
          </button>
        </form>
      </main>
    </div>
  )
}

export default CreateTask