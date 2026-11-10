const TaskCard = ({
  priority = 'High',
  date = '20 Feb 2024',
  title = 'Make a YouTube video',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ullam libero quisquam. Ea, vitae et.',
}) => {
  return (
    <article
      className="flex h-full min-h-0 w-full max-w-[360px] flex-col overflow-hidden rounded-2xl p-3 text-white shadow-lg shadow-black/20"
      style={{ backgroundColor: '#e87975', maxHeight: '320px' }}
    >
      <div className="flex items-center justify-between gap-4">
        <span
          className="rounded-md px-3 py-1 text-xs font-semibold sm:text-sm"
          style={{ backgroundColor: '#c83e31' }}
        >
          {priority}
        </span>
        <time className="text-xs font-medium sm:text-sm">{date}</time>
      </div>

      <div className="mt-2 min-h-0 overflow-hidden">
        <h2 className="text-lg font-bold leading-tight">{title}</h2>
        <p className="mt-1 line-clamp-2 text-sm leading-5">{description}</p>
      </div>
    </article>
  )
}

export default TaskCard