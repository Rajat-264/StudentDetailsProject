import React, { useState, useEffect } from 'react';
import Input1 from '../components/Input1';
import Button from '../components/Button';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import CustomDatePicker from "./CustomDatePicker";

const UpdatePlacementDetails = () => {

  const [formData, setFormData] = useState({
    studentID: "",
    placementType: "",
    companyID: "",
    customCompanyName: "",
    startDate: "",
    endDate: "",
    role: "",
    status: "PENDING",
    remark: "",
  });

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Function to fetch company data
  const fetchData = () => {
    axios.get("http://localhost:8080/api/companies/all")
      .then(response => setCompanies(response.data))
      .catch(error => console.error("Error fetching companies:", error));
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/students/me", { withCredentials: true })
        .then(response => {
            if (response.data.studentID) {
                setFormData(prevState => ({ ...prevState, studentID: response.data.studentID }));
            }
        })
        .catch(error => console.error("Failed to fetch student ID:", error));
  }, []);

  // ✅ Fetch companies on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const handleAddNewCompany = async (e) => {
    e.preventDefault(); 
    if (!formData.customCompanyName.trim()) {
        alert("❌ Please enter a new company name before adding.");
        return;
    }
    try {
        setLoading(true);
        const response = await axios.post("http://localhost:8080/api/companies/add", {
            companyName: formData.customCompanyName
        });

        alert("✅ New company added successfully!");
        setFormData(prevState => ({ ...prevState, companyID: response.data.companyID, customCompanyName: "" }));
        
        // ✅ Fetch updated company list after adding a new company
        fetchData();
    } catch (error) {
        alert("❌ Failed to add new company.");
        console.error("Error adding company:", error);
    } finally {
        setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (name, date) => {
    setFormData({ ...formData, [name]: date });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🛠️ Submitting data:", formData);
    setLoading(true);
    try {
      await axios.post("http://localhost:8080/api/placements/add", formData);
      alert("Placement details added successfully!");
    } catch (error) {
      console.error("Error submitting:", error);
      alert("Failed to add placement details.");
    }
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-6 mt-20">
      <div className="pt-16"><Sidebar /></div>
      <div className="col-span-5 bg-white py-10 px-20 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-700 mb-8">Placement Details</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <label className="block text-lg font-bold text-gray-700">Placement Type:</label>
          <select name="placementType" value={formData.placementType} onChange={handleChange} required>
            <option value="">Select Type</option>
            <option value="Internship">Internship</option>
            <option value="Full-time">Full-time</option>
          </select>
        <div>
          <label className="block text-lg font-bold text-gray-700">Company:</label>
          <select name="companyID" value={formData.companyID} onChange={handleChange}>
            <option value="">Select Company</option>
            {companies.map(company => (
              <option key={company.companyID} value={company.companyID}>{company.companyName}</option>
            ))}
          </select>
           <Input1
              labelText="Or enter new company name"
              name="customCompanyName"
              value={formData.customCompanyName}
              onChange={handleChange}
              disabled={!!formData.companyID} 
            />
          
            <Button
              buttonText="Add New Company"
              onClick={handleAddNewCompany}
              type="button" 
              disabled={loading}
            />
        </div>
          <Input1 labelText="Role *" name="role" value={formData.role} onChange={handleChange} required />

          <CustomDatePicker labelText="Start Date *" selectedDate={formData.startDate} onChange={(date) => handleDateChange("startDate", date)} />
          <CustomDatePicker labelText="End Date *" selectedDate={formData.endDate} onChange={(date) => handleDateChange("endDate", date)} />

          <Button buttonText="Submit" type="submit" disabled={loading} />
        </form>
      </div>
    </div>
  );
}

export default UpdatePlacementDetails;
