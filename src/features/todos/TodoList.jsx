import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TodoCard from './components/TodoCard'
import { useTodos } from './hooks/useTodos'
import { Funnel, ListTodo, Loader } from 'lucide-react'
import Button from '../../shared/ui/Button'
import Select from '../../shared/ui/Select'

// количесто карточек на странице
const limit = 12

function TodoList() {
  const [completed, setCompleted] = useState('')
  const [start, setStart] = useState(0)
  const [userId, setUserId] = useState('')
  const [sortOrder, setSortOrder] = useState('asc')
  const [todos, loading, error, totalCount, visibleCount] = useTodos(limit, start, completed, userId, sortOrder)


  // вывод ошибки
  if (error) {
    return (
    <div className="fixed inset-0 bg-black/30 flex flex-col items-center justify-center z-50">
          <p className="text-white text-xl">{error}</p>
    </div>
    )
  }

  // Определение текущей страницы и количество страниц
  const totalPages = Math.ceil(visibleCount / limit)
  const currentPage = start / limit + 1

  // Определение видимых кнопок страниц
  let startPage = Math.max(currentPage - 2, 1)
  let endPage = Math.min(startPage + 4, totalPages)
  startPage = Math.max(endPage - 4, 1)
  const pagesToShow = []
  for (let i = startPage; i <= endPage; i++) {
    pagesToShow.push(i)
  }

  return (
    <>
      {/* controls */}
      <div className='bg-white/70 backdrop-blur-md rounded-xl shadow-lg ring-1 ring-black/5 p-4 mb-6 flex gap-4 justify-evenly'>
        <Select selectValue={completed} onSelectChange={(e) => (setCompleted(e.target.value), setStart(0))}>
          <option value={''}>Все задачи</option>
          <option value={true}>Выполненные</option>
          <option value={false}>Не выполненные</option>
        </Select>
        <Select selectValue={userId} onSelectChange={(e) => (setUserId(e.target.value), setStart(0))}>
          <option value="">Все пользователи</option>
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              User {i + 1}
            </option>
          ))}
        </Select>
        <Select selectValue={sortOrder} onSelectChange={(e) => (setSortOrder(e.target.value), setStart(0))}>
          <option value={'asc'}>По возрастанию (id)</option>
          <option value={'desc'}>По убыванию (id)</option>
        </Select>
      </div>

      {/* statictic */}
      <div className='bg-white/70 backdrop-blur-md rounded-xl shadow-lg ring-1 ring-black/5 p-4 mb-6 flex justify-evenly gap-4'>
        <div className='flex flex-col items-center'>
          <div className='flex gap-4 items-center mb-1'>
            <ListTodo className='text-red-600 w-8 h-8' /><span className='bg-white/50 p-2 rounded-xl text-red-600 font-bold'>{totalCount}</span>
          </div>
          <p className='text-gray-500'>Количесто задач </p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex gap-4 items-center mb-1'>
            <Funnel className='text-yellow-600 w-8 h-8' /><span className='bg-white/50 p-2 rounded-xl text-yellow-600 font-bold'>{visibleCount}</span>
          </div>
          <p className='text-gray-500'>После фильтрации </p>
        </div>
      </div>

      {/* пагинация */}
      <div className='flex-1 flex justify-center gap-4 mb-4 items-end'>
        <Button onClick={() => setStart(prev => prev - limit)} disabled={start < limit}>Prev</Button>

        {pagesToShow.map(page => (
          <Button
            key={page}
            onClick={() => setStart((page - 1) * limit)}
            disabled={currentPage === page}
          >
            {page}
          </Button>
        ))}

        <Button onClick={() => setStart(prev => prev + limit)} disabled={currentPage === totalPages}>Next</Button>
      </div>

      {/* spinner */}
      {loading && (
        <div className="fixed inset-0 bg-black/30 flex flex-col items-center justify-center z-50">
          <Loader className="animate-spin w-10 h-10 text-white" />
          <p className="text-white text-xl mt-3">Loading...</p>
        </div>
      )}

      {/* todos grid */}
      <ul className='grid grid-cols-4 gap-4'>
        {todos.map((item) => (
          <li key={item.id} className='list-none'>
            <TodoCard
              id={item.id}
              userId={item.userId}
              title={item.title}
              completed={item.completed}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList
