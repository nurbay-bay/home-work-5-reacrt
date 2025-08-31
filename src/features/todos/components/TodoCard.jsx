import { CircleCheckBig, CircleUser } from 'lucide-react'
import React from 'react'

// определение цветов иконки для определенного userId
function colorFromId(id) {
  const hue = (id * 137 + 137) % 360
  return `hsl(${hue}, 65%, 40%)`
}

function TodoCard({ id, userId, title, completed }) {
  const color = colorFromId(userId)

  return (
    <div className={`p-4 backdrop-blur-md rounded-xl shadow-lg ring-1 ring-black/5 aspect-video ${completed ? 'bg-white/50' :'bg-white/70'}`}>

      <div className='flex gap-3 items-center mb-4'>
        <CircleUser className='w-8 h-8' style={{ color }} />
        <small className='text-gray-500 italic '>UserID: {userId}</small>
        {completed && <CircleCheckBig className='text-green-600 ml-auto'/>}
      </div>
      <p>{title}</p>

    </div>
  )
}

export default TodoCard
