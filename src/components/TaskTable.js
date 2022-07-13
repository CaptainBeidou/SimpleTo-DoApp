import TaskRow from './TaskRow.js'

const TaskTable = ({tasks, toggleTask, showCompleted = false}) => {

  const taskTableRow = (doneValue) => {
    return(
      tasks
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow
          task={task}
          key={task.name}
          toggleTask={toggleTask}
        />
      ))
    )
  }
  return (
    <div>
      <table className="table table-dark table-striped table-borderer border-secondary">
        <thead className="table-primary">
        <tr><th>Tasks</th></tr>
        </thead>
        <tbody>
          {
            taskTableRow(showCompleted)
          }
        </tbody>
      </table>
    </div>
  )
}

export default TaskTable
