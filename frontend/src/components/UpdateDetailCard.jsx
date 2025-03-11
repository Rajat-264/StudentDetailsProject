import React from 'react'

const UpdateDetailCard = ({updateCardText , updateCardImage}) => {
    return (
        <div className='flex gap-20 border-2 border-black items-center p-2 w-[50rem] m-2 rounded-xl'>
            <img src={updateCardImage} className='h-16 w-16 object-cover rounded-md' alt="" />
            <h1 className='text-xl font-semibold'>{updateCardText}</h1>
        </div>
      )
}

export default UpdateDetailCard