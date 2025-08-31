import React from 'react'

function Select({selectValue, onSelectChange, children}) {
  return (
    <select value={selectValue} onChange={onSelectChange}
      className="
        border
        rounded
        px-3 py-2
        bg-white
        text-gray-700
        focus:outline-none
        focus:ring-2
        focus:ring-emerald-500
        focus:border-emerald-500
        shadow-sm
        hover:shadow-md
        transition
        duration-200
        ease-in-out"
    >
      {children}
    </select>
  )
}

export default Select
