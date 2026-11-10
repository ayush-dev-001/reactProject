const TaskListNumbers = () => {
  const taskStatuses = [
    { label: 'New Task', color: '#f87171', count: 0 },
    { label: 'Completed Task', color: '#60a5fa', count: 0 },
    { label: 'Accepted Task', color: '#4ade80', count: 0 },
    { label: 'Failed Task', color: '#facc15', count: 0 },
  ]

  return (
        <div
          className="min-w-0 gap-2"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          }}
        >
      {taskStatuses.map(({ label, color, count }) => (
        <div
          key={label}
              className="min-w-0 rounded-xl px-3 py-3 text-black"
              style={{ backgroundColor: color, overflowWrap: 'anywhere' }}
        >
              <h2 className="text-3xl font-semibold leading-none">{count}</h2>
              <h3 className="mt-1 text-sm font-medium leading-tight">{label}</h3>
        </div>
      ))}
        </div>
  )
}

export default TaskListNumbers