import React from 'react'
import Sidebar from '../components/Sidebar'
import UpdateDetailCard from "../components/UpdateDetailCard"
import { Link } from 'react-router-dom'

const UpdateDetails = () => {
    return (
        <div className="grid grid-cols-6 mt-5 ">
              <div className='fixed mt-[2rem]'>
                <Sidebar />
              </div>
              <div className="col-start-2 col-span-5 p-[5rem]">
                <div>
                  <h1 className='text-3xl font-bold underline'>Update Participation Details</h1>
                  <div className="mt-10 flex flex-col gap-1">
                    <div className='transition-transform duration-300 hover:-translate-y-1'>
                    <Link to="/student/update-details/update-technical-details" style={{ textDecoration: "none" }}>
                    <UpdateDetailCard updateCardText={"Technical Events"} updateCardImage={"https://cdn-icons-png.flaticon.com/128/4257/4257487.png"} />
                    </Link>
                    </div>
                    <div className='transition-transform duration-300 hover:-translate-y-1'>
                    <Link to="/student/update-details/update-cultural-details" style={{ textDecoration: "none" }}>
                    <UpdateDetailCard updateCardText={"Cultural Events"} updateCardImage={"https://cdn-icons-png.flaticon.com/128/1778/1778557.png"} />
                    </Link>
                    </div>
                    <div className='transition-transform duration-300 hover:-translate-y-1'>
                    <Link to="/student/update-details/update-sport-details" style={{ textDecoration: "none" }}>
                    <UpdateDetailCard updateCardText={"Sports Events"} updateCardImage={"https://cdn-icons-png.flaticon.com/128/4163/4163761.png"} />
                    </Link>
                    </div>
                    <div className='transition-transform duration-300 hover:-translate-y-1'>
                    <Link to="/student/update-details/update-professional-society-details" style={{ textDecoration: "none" }}>
                    <UpdateDetailCard updateCardText={"Professional Societies"} updateCardImage={"https://cdn-icons-png.flaticon.com/128/10235/10235319.png"} />
                    </Link>
                    </div>
                    <div className='transition-transform duration-300 hover:-translate-y-1'>
                    <Link to="/student/update-details/update-publications-details" style={{ textDecoration: "none" }}>
                    <UpdateDetailCard updateCardText={"Publications"} updateCardImage={"https://cdn-icons-png.flaticon.com/128/888/888034.png"} />
                    </Link>
                    </div>
                    <div className='transition-transform duration-300 hover:-translate-y-1'>
                    <Link to="/student/update-details/update-placement-details" style={{ textDecoration: "none" }}>
                    <UpdateDetailCard updateCardText={"Placements"} updateCardImage={"https://cdn-icons-png.flaticon.com/128/15188/15188745.png"} />
                    </Link>
                    </div>
                    <div className='transition-transform duration-300 hover:-translate-y-1'>
                    <UpdateDetailCard updateCardText={"Clubs"} updateCardImage={"https://cdn-icons-png.flaticon.com/128/9495/9495009.png"} />
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          )
}

export default UpdateDetails