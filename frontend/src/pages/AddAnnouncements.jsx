import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Sidebar from "../components/Sidebar"

const AddAnnouncements = () => {
    return (
        <div className="grid grid-cols-6 mt-20">
        <div>
          <Sidebar />
        </div>
        <div className="col-span-5 p-5">
          <div>
            <h1 className='text-2xl font-bold'>Announcements</h1>
            <div className=" mt-5">
              <div>
                  <Input labelText={"Title"} placeholderText={"Upcoming Holiday on 24th March"} />
              </div>
              <div>
                  <Input labelText={"Content"} placeholderText={""} />
              </div>
            </div>
            <div className='flex pr-2 mt-6 ml-2'>
            <Button buttonText={"Submit"} />
            </div>
          </div>
        </div>
      </div>
      )
}

export default AddAnnouncements