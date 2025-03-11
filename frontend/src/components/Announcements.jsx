import React from 'react'

const Announcements = () => {
  return (
    <div className='mt-6'>
        <h1 className='text-3xl font-bold underline underline-offset-8'> Announcements</h1>
        <div className='mt-2'>
            <h2 className='font-bold text-xl mb-2'>Title</h2>
            <ol className='list-disc ml-5'>
                <li>13 December, 2024 is a Holiday on the account of a festival.</li>
                <li>The technical details file submitted has been approves by the faculty advisor. </li>
            </ol>
        </div>
    </div>
  )
}

export default Announcements