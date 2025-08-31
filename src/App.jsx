import { useState } from 'react'
import TodoList from './features/todos/TodoList'

function App() {

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-emerald-700 to-amber-200 py-8 px-4'>
        <div className='max-w-6xl mx-auto'>
          <TodoList />
        </div>
      </div>
    </>
  )
}

export default App
