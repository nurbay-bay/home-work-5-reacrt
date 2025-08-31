import axios from "axios"
import React, { useEffect, useState } from 'react'

export function useTodos(limit = 5, start = 0, completed = '', userId = '', sortOrder = 'asc') {
  const [todos, setTodos] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [totalCount, setTotalCount] = useState(0)
  const [visibleCount, setVisibleCount] = useState(0)

  // получение количесто задач с апи (только при монтировании)
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=1') // лимит чтобы не грузить
      .then(res => setTotalCount(Number(res.headers['x-total-count'])))
      .catch((err) => { setError(`Ошибка получение данных, ${err}`) })
  }, [])

  useEffect(() => {
    // запуск спиннера при изменениях 
    setLoading(true)

    axios
      .get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_start=${start}${completed !== '' ? `&completed=${completed}` : ''}${userId !== '' ? `&userId=${userId}` : ''}&_sort=id&_order=${sortOrder}`)
      .then((res) => {
        setTodos(res.data)
        setVisibleCount(Number(res.headers["x-total-count"])) // количество с учетом фильтров
      })
      .catch((err) => { setError(`Ошибка получение данных, ${err}`) })
      .finally(() => { setLoading(false) })
  }, [start, completed, userId, sortOrder])

  return [todos, loading, error, totalCount, visibleCount]
}

