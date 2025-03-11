import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Sidebar from '../components/Sidebar'

const UpdateTechDetails = () => {
    return (
        <div className="grid grid-cols-6 mt-20">
          <div>
            <Sidebar />
          </div>
          <div className="col-span-5 p-5">
            <div>
              <h1 className='text-2xl font-bold'>Technical Events Details</h1>
              <div className=" mt-5">
                <div>
                    <Input labelText={"Event Name"} placeholderText={"Tathva"} />
                </div>
                <div>
                    <Input labelText={"Event Category"} placeholderText={"Tathva"} />
                </div>
                <div className='flex justify-between'>
                    <Input labelText={"Date"} placeholderText={"29/01/2020"}/>
                    <Input labelText={"Role"} placeholderText={"Financial Manager"}/>
                </div>
                <div>
                    <Input labelText={"Achievement Details"} placeholderText={"First Position"}/>
                </div>
                <div className='flex justify-between'>
                    <Input labelText={"Other Details"} placeholderText={"First Position"}/>
                    <Input labelText={"Participation Certificate"} placeholderText={"File Upload"}/>
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

export default UpdateTechDetails