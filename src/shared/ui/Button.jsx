import React from 'react'

function Button({ children, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}
      className='cursor-pointer bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow disabled:opacity-20 disabled:cursor-not-allowed'
    >
      {children}
    </button>
  )
}

export default Button
