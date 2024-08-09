import React, { useState } from 'react'

const TodoForm = ({addTask}) => {

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (value) {
      addTask(value);
      setValue('');
    }

  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='TodoForm'>
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)} className='todo-input' placeholder='今天的任务是？' />
        <button type='submit' className='todo-btn'>添加任务</button>
      </form>
    </div>
  )
}

export default TodoForm
