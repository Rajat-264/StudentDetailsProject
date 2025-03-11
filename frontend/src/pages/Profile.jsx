import React from 'react'
import Input from '../components/Input';
import Button from '../components/Button';
import Sidebar from '../components/Sidebar';

const Profile = () => {
    return (
        <div className="grid grid-cols-6 mt-20">
          <div>
            <Sidebar />
          </div>
          <div className="col-span-5 p-5">
            <div>
              <h1 className='text-2xl font-bold'>Profile</h1>
              <div className=" mt-5">
                <div>
                    <Input labelText={"Name"} placeholderText={"Kranti Sambhav"} />
                </div>
                <div className='flex justify-between'>
                    <Input labelText={"Registration Number"} placeholderText={"B220970CS"} />
                    <Input labelText={"Date Of Birth"} placeholderText={"29/01/2003"}/>
                    <Input labelText={"Gender"} placeholderText={"Male"}/>
                </div>
                <div className='flex justify-between'>
                    <Input labelText={"Programme"} placeholderText={"BTech"}/>
                    <Input labelText={"Branch"} placeholderText={"Computer Science"}/>
                </div>
                <div className='flex justify-between'>
                    <Input labelText={"Email"} placeholderText={"kranti_b220970cs@nitc.ac.in"}/>
                    <Input labelText={"APAAR Id"} placeholderText={"1234567"}/>
                </div>
                <div>
                    <Input labelText={"Faculty Advisor"} placeholderText={"Gopa Kumar"}/>
                </div>
              </div>
              <div className='flex pr-2 mt-6 ml-2'>
              <Button buttonText={"Submit"} />
              </div>
            </div>
          </div>
        </div>
      );
}

export default Profile