import React from 'react'

const Button = ({ buttonText = "Details" }) => {
  return (
    <div>
      <button className="shadow-lg shadow-black/50 w-full px-6 py-2 text-white bg-black border border-black dark:border-white dark:bg-black dark:text-white rounded-lg font-bold transform hover:-translate-y-1 hover:shadow-xl hover:shadow-black/60 transition duration-300">
        {buttonText}
      </button>
    </div>
  )
}

export default Button