import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Sidebar from '../components/Sidebar'

const ViewDetails = () => {
    return (
        <div className="grid grid-cols-6 mt-20">
        <div>
          <Sidebar />
        </div>
        <div className="col-span-5 p-5">
          <div>
            <h1 className='text-2xl font-bold'>Details Page</h1>
            <div className=" mt-5">
              <div className='flex justify-between'>
                  <Input labelText={"Name"} placeholderText={"Kranti Sambhav"}/>
                  <Input labelText={"Roll Number"} placeholderText={"B220970CS"}/>
              </div>
              <div>
                  <Input labelText={"Event Name"} placeholderText={"Tathva"} />
              </div>
              <div>
                  <Input labelText={"Event Category"} placeholderText={"Dance"} />
              </div>
              <div className='flex justify-between'>
                  <Input labelText={"Date"} placeholderText={"29/01/2020"}/>
                  <Input labelText={"Role"} placeholderText={"Financial Manager"}/>
              </div>
              <div>
                  <Input labelText={"Achievement"} placeholderText={"First Position"}/>
              </div>
              <div>
                <Input labelText={"Achievement Details"} placeholderText={""}/>
              </div>
              <div className='flex justify-between'>
                  <Input labelText={"Other Details"} placeholderText={""}/>
                  <Input labelText={"Participation Certificate"} placeholderText={"Uploaded File"}/>
              </div>
              <div>
                <Input labelText={"Remark By Faculty Advisor"} placeholderText={""}/>
              </div>
            </div>
            <div className='flex pr-2 mt-6 ml-2'>
            <Button buttonText={"Update and Resubmit "} />
            </div>
          </div>
        </div>
      </div>
      )
}

export default ViewDetails