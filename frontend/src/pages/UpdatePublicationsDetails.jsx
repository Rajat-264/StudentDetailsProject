import React from 'react'
import Button from '../components/Button'
import Sidebar from '../components/Sidebar'
import Input from '../components/Input'
const UpdatePublicationsDetails = () => {
    return (
        <div className="grid grid-cols-6 mt-20">
            <div>
              <Sidebar />
            </div>
            <div className="col-span-5 p-5">
              <div>
                <h1 className='text-2xl font-bold'>Publications Details</h1>
                <div className=" mt-5">
                  <div>
                      <Input labelText={"Publications Title"} placeholderText={"Research on LLM's"} />
                  </div>
                  <div>
                      <Input labelText={"Authors"} placeholderText={"Mr. Prakhar Pandey"} />
                  </div>
                  <div>
                      <Input labelText={"Year"} placeholderText={"2003"}/>
                  </div>
                  <div>
                      <Input labelText={"Journal / Conference"} placeholderText={""}/>
                  </div>
                  <div>
                      <Input labelText={"Upload Publication"} placeholderText={"File Upload"}/>
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

export default UpdatePublicationsDetails