import React, { useState } from 'react'

const EditTodo = ({editTask, task}) => {

  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (value) {
      editTask(value, task.id);
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='TodoForm'>
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)} className='todo-input' placeholder='更新任务' />
        <button type='submit' className='todo-btn'>更新任务</button>
      </form>
    </div>
  )
}

export default EditTodo
