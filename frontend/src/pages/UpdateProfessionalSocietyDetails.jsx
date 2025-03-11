import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Sidebar from '../components/Sidebar'

const UpdateProfessionalSocietyDetails = () => {
    return (
        <div className="grid grid-cols-6 mt-20">
        <div>
          <Sidebar />
        </div>
        <div className="col-span-5 p-5">
          <div>
            <h1 className='text-2xl font-bold'>Professional Societies Details</h1>
            <div className=" mt-5">
              <div>
                  <Input labelText={"Society Name"} placeholderText={"Peace Club"} />
              </div>
              <div>
                  <Input labelText={"Category"} placeholderText={"Arts"} />
              </div>
              <div className='flex justify-between'>
                  <Input labelText={"Date Joined"} placeholderText={"29/01/2020"}/>
                  <Input labelText={"Role"} placeholderText={"Financial Manager"}/>
              </div>
              <div>
                  <Input labelText={"Achievement Details (if any)"} placeholderText={"First Position"}/>
              </div>
              <div className='flex justify-between'>
                  <Input labelText={"Other Details"} placeholderText={"First Position"}/>
                  <Input labelText={"Proof of membership"} placeholderText={"File Upload"}/>
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

export default UpdateProfessionalSocietyDetails