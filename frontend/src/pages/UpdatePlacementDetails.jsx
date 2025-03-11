import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Sidebar from '../components/Sidebar'

const UpdatePlacementDetails = () => {
    return (
        <div className="grid grid-cols-6 mt-20">
            <div>
              <Sidebar />
            </div>
            <div className="col-span-5 p-5">
              <div>
                <h1 className='text-2xl font-bold'>Placement / Internships Details</h1>
                <div className=" mt-5">
                  <div>
                      <Input labelText={"Placement Type"} placeholderText={"Full Time / Internship"} />
                  </div>
                  <div>
                      <Input labelText={"Company Name "} placeholderText={"Rolls Royce"} />
                  </div>
                  <div className='flex justify-between'>
                      <Input labelText={"Joining Date"} placeholderText={"29/01/2020"}/>
                      <Input labelText={"End Date (For Internships Only)"} placeholderText={"29/05/2020"}/>
                  </div>
                  <div>
                      <Input labelText={"Role"} placeholderText={"SDE - 1"}/>
                  </div>
                  <div>
                      <Input labelText={"Offer Letter"} placeholderText={"File Upload"}/>
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

export default UpdatePlacementDetails