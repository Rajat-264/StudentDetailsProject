import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Sidebar from '../components/Sidebar'

const UpdateSportDetails = () => {
    return (
        <div className="grid grid-cols-6 mt-20">
        <div>
          <Sidebar />
        </div>
        <div className="col-span-5 p-5">
          <div>
            <h1 className='text-2xl font-bold'>Sport Events Details</h1>
            <div className=" mt-5">
              <div>
                  <Input labelText={"Event Name"} placeholderText={"Jaladhi"} />
              </div>
              <div>
                  <Input labelText={"Sport Event Category"} placeholderText={"Tathva"} />
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

export default UpdateSportDetails