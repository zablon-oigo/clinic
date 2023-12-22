import React from 'react'

function Button({title}) {
  return (
    <>
    <button className='px-6 py-3 rounded duration-700 transition-all font-sans hover:translate-x-2 hover:duration-500 hover:bg-teal-700 hover:transition-all bg-teal-500 text-white font-light '>{title}</button>
    </>
  )
}

export default Button