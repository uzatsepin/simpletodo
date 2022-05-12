import React, { useState } from 'react'

function CreateTodoField({setTodos}) {
  const [title, setTitle] = useState('');

  const addTodo = (title) => {
    setTodos(prev => [
      {
        id: new Date(),
        title,
        isCompleted: false,
      },
      ...prev,
    ])
    setTitle('')
  }
  
  return (
    <div className='flex items-center justify-between mb-4 rounded-3xl bg-gray-800 px-5 py-4 w-full mt-20 border-2 border-gray-700'>
      <input type="text" 
             onChange={e => setTitle(e.target.value)} 
             value={title}
             onKeyPress={e => e.key === 'Enter' && addTodo(title)}
             className='bg-transparent w-full border-none outline-none'
             placeholder='Add a task '/>
    </div>
  )
}

export default CreateTodoField