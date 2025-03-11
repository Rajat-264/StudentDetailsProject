import React from 'react'
import Sidebar from '../components/Sidebar'
const RejectedApprovals = () => {
    return (
        <div className="grid grid-cols-6 mt-20">
              <div>
                <Sidebar />
              </div>
              <div className="col-span-5 p-5 flex justify-between">
                <div>Name</div>
                <div>Event</div>
                <div>Status</div>
              </div>
            </div>
          )
}

export default RejectedApprovals