import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home.jsx'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx';
import Profile from './pages/Profile.jsx';
import ViewDetails from './pages/ViewDetails.jsx';
import UpdateDetails from './pages/UpdateDetails.jsx';
import UpdateTechDetails from './pages/UpdateTechDetails.jsx';
import UpdateSportDetails from './pages/UpdateSportDetails.jsx';
import UpdateCulturalDetails from './pages/UpdateCulturalDetails.jsx';
import UpdateProfessionalSocietyDetails from './pages/UpdateProfessionalSocietyDetails.jsx';
import UpdatePublicationsDetails from './pages/UpdatePublicationsDetails.jsx';
import UpdatePlacementDetails from './pages/UpdatePlacementDetails.jsx';
import AddAnnouncements from "./pages/AddAnnouncements.jsx"
import Approvals from './pages/Approvals.jsx';
import PendingApprovals from './pages/PendingApprovals.jsx';
import PreviousApprovals from './pages/PreviousApprovals.jsx';
import RejectedApprovals from './pages/RejectedApprovals.jsx'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path='/Profile' element={<Profile />} />
        <Route path='/UpdateDetails' element={<UpdateDetails />} />
        <Route path='/ViewDetails' element={<ViewDetails />} />
        <Route path='/Approvals' element={<Approvals />} />
        <Route path='/UpdateTechDetails' element={<UpdateTechDetails />} />
        <Route path='/UpdateSportDetails' element={<UpdateSportDetails />} />
        <Route path='/UpdateCulturalDetails' element={<UpdateCulturalDetails />} />
        <Route path='/UpdateProfessionalSocietyDetails' element={<UpdateProfessionalSocietyDetails />} />
        <Route path='/UpdatePublicationsDetails' element={<UpdatePublicationsDetails />} />
        <Route path='/UpdatePlacementDetails' element={<UpdatePlacementDetails />} />
        <Route path='/AddAnnouncements' element={<AddAnnouncements />} />
        <Route path='/PendingApprovals' element={<PendingApprovals />} />
        <Route path='/RejectedApprovals' element={<RejectedApprovals />} />
        <Route path='/PreviousApprovals' element={<PreviousApprovals />} />
        <Route />
      </Routes>
    </Router>
  )
}

export default App;
