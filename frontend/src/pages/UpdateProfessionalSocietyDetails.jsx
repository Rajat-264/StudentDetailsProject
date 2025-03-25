import React, { useState, useEffect } from 'react';
import Input1 from '../components/Input1';
import Button from '../components/Button';
import Sidebar from '../components/Sidebar';
import CustomDatePicker from './CustomDatePicker';
import axios from 'axios';

const UpdateProfessionalSocietyDetails = () => {
    const [formData, setFormData] = useState({
        societyID: "",
        customSocietyName: "",
        fieldID: "",
        customFieldName: "",
        dateJoined: "",
        role: "",
        achievementDetails: "",
    });

    const [societyNames, setSocietyNames] = useState([]);
    const [fields, setFields] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      axios.get("http://localhost:8080/api/students/me", { withCredentials: true })
          .then(response => {
              if (response.data.studentID) {
                  setFormData(prevState => ({ ...prevState, studentID: response.data.studentID }));
              }
          })
          .catch(error => console.error("Failed to fetch student ID:", error));
  }, []);

    useEffect(() => {
        axios.get("http://localhost:8080/api/professional-society/societies")
            .then(response => setSocietyNames(response.data))
            .catch(error => console.error("❌ Error fetching societies:", error));

        axios.get("http://localhost:8080/api/professional-society/fields")
            .then(response => setFields(response.data))
            .catch(error => console.error("❌ Error fetching fields:", error));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, dateJoined: date });
    };

    const handleAddNewSociety = () => {
        if (!formData.customSocietyName.trim()) return;
        setLoading(true);
        axios.post("http://localhost:8080/api/professional-society/societies/add", { societyName: formData.customSocietyName })
            .then(response => {
                setSocietyNames([...societyNames, response.data]);
                setFormData({ ...formData, societyID: response.data.societyID, customSocietyName: "" });
            })
            .catch(error => console.error("❌ Error adding society:", error))
            .finally(() => setLoading(false));
    };

    const handleAddNewField = () => {
        if (!formData.customFieldName.trim()) return;
        setLoading(true);
        axios.post("http://localhost:8080/api/professional-society/fields/add", { fieldName: formData.customFieldName })
            .then(response => {
                setFields([...fields, response.data]);
                setFormData({ ...formData, fieldID: response.data.fieldID, customFieldName: "" });
            })
            .catch(error => console.error("❌ Error adding field:", error))
            .finally(() => setLoading(false));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post("http://localhost:8080/api/professional-society/add", formData)
            .then(response => alert("✅ Professional Society Detail submitted successfully!"))
            .catch(error => console.error("❌ Error submitting details:", error))
            .finally(() => setLoading(false));
    };

    return (
        <div className="grid grid-cols-6 mt-20">
            <div className="pt-16">
                <Sidebar />
            </div>
            <div className="col-span-5 bg-white py-10 px-20 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-700 mb-8">Professional Society Details</h1>
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    
                    {/* Society Name Selection */}
                    <div>
                        <label className="block text-lg font-bold text-gray-700">Society Name *</label>
                        <select name="societyID" value={formData.societyID} onChange={handleChange} required>
                            <option value="">Select Society Name</option>
                            {societyNames.length > 0 ? (
                                societyNames.map(society => (
                                    <option key={society.societyID} value={society.societyID}>
                                        {society.societyName}
                                    </option>
                                ))
                            ) : (
                                <option disabled>Loading Societies...</option>
                            )}
                        </select>

                        <Input1
                            labelText="Or enter new society name"
                            name="customSocietyName"
                            value={formData.customSocietyName}
                            onChange={handleChange}
                            disabled={!!formData.societyID}
                        />

                        <Button
                            buttonText="Add New Society"
                            onClick={handleAddNewSociety}
                            type="button"
                            disabled={loading}
                        />
                    </div>

                    {/* Society Field Selection */}
                    <div>
                        <label className="block text-lg font-bold text-gray-700 mt-10">Society Field *</label>
                        <select name="fieldID" value={formData.fieldID} onChange={handleChange} required>
                            <option value="">Select Field</option>
                            {fields.length > 0 ? (
                                fields.map(field => (
                                    <option key={field.fieldID} value={field.fieldID}>
                                        {field.fieldName}
                                    </option>
                                ))
                            ) : (
                                <option disabled>Loading Fields...</option>
                            )}
                        </select>

                        <Input1
                            labelText="Or enter new field"
                            name="customFieldName"
                            value={formData.customFieldName}
                            onChange={handleChange}
                            disabled={!!formData.fieldID}
                        />

                        <Button
                            buttonText="Add New Field"
                            onClick={handleAddNewField}
                            type="button"
                            disabled={loading}
                        />
                    </div>

                    {/* Date Joined */}
                    <CustomDatePicker
                        labelText="Date Joined *"
                        selectedDate={formData.dateJoined}
                        onChange={handleDateChange}
                        required
                        className="mt-6"
                    />

                    {/* Role */}
                    <Input1
                        labelText="Role *"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    />

                    {/* Achievement Details */}
                    <Input1
                        labelText="Achievement Details"
                        name="achievementDetails"
                        value={formData.achievementDetails}
                        onChange={handleChange}
                    />

                    {/* Submit Button */}
                    <Button buttonText="Submit" type="submit" />
                </form>
            </div>
        </div>
    );
}

export default UpdateProfessionalSocietyDetails;
