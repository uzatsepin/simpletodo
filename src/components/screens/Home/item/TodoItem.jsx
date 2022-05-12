import React from 'react'
import Check from './Check'
import cn from 'classnames';

function TodoItem({todo, changeTodo}) {
  return (
    <button className='flex items-center mb-4 rounded-3xl bg-gray-800 p-5 w-full' onClick={() => changeTodo(todo.id)}>
      <Check isCompleted={todo.isCompleted}/>
      <span className={cn({
        'line-through' : todo.isCompleted,
        })}>
          {todo.title}
        </span>
    </button>
  )
}

export default TodoItem