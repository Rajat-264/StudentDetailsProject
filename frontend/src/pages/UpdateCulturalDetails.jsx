import React, { useState, useEffect } from "react";
import axios from "axios";
import Input1 from "../components/Input1";
import Button from "../components/Button";
import Sidebar from "../components/Sidebar";
import { fetchEventNames, fetchEventCategories, addCulturalDetail } from "../api2";
import "react-datepicker/dist/react-datepicker.css";
import CustomDatePicker from "./CustomDatePicker";

const UpdateCulturalDetails = () => {
    const [eventNames, setEventNames] = useState([]);
    const [eventCategories, setEventCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        studentID: "",
        eventID: "",
        eventCategoryID: "",
        eventDate: "",
        role: "",
        achievement: "",
        achievementDetails: "",
        otherDetails: "",
        customEventName: "",
        customEventCategory: "",
    });

    useEffect(() => {
        axios.get("http://localhost:8080/api/students/me", { withCredentials: true })
            .then(response => {
                if (response.data.studentID) {
                    setFormData(prevState => ({ ...prevState, studentID: response.data.studentID }));
                }
            })
            .catch(error => console.error("Failed to fetch student ID:", error));
    }, []);

    const fetchData = () => {
        fetchEventNames()
            .then(setEventNames)
            .catch(error => console.error("Failed to fetch event names:", error));

        fetchEventCategories()
            .then(setEventCategories)
            .catch(error => console.error("Failed to fetch event categories:", error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
        console.log(`Updated Field: ${e.target.name}, Value: ${e.target.value}`);
    };

    const handleDateChange = (date) => {
        setFormData(prevState => ({ ...prevState, eventDate: date }));
    };

    const handleAddNewEvent = async (e) => {
        e.preventDefault(); 
        if (!formData.customEventName.trim()) {
            alert("❌ Please enter a new event name before adding.");
            return;
        }
        try {
            setLoading(true);
            const response = await axios.post("http://localhost:8080/api/events/cultural/add", {
                name: formData.customEventName
            });

            alert("✅ New event added successfully!");
            setFormData({ ...formData, eventID: response.data.eventID, customEventName: "" });
            fetchData();
        } catch (error) {
            alert("❌ Failed to add new event.");
            console.error("Error adding event:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddNewCategory = async (e) => {
        e.preventDefault();
        if (!formData.customEventCategory.trim()) {
            alert("❌ Please enter a new category before adding.");
            return;
        }
        try {
            setLoading(true);
            const response = await axios.post("http://localhost:8080/api/eventCategories/add", 
              { eventCategoryName: formData.customEventCategory }, // ✅ Ensure correct key
              { headers: { "Content-Type": "application/json" } } // ✅ Add headers
          );

            alert("✅ New category added successfully!");
            setFormData({ ...formData, eventCategoryID: response.data.eventCategoryID, customEventCategory: "" });
            fetchData(); // Refresh dropdowns
        } catch (error) {
            alert("❌ Failed to add new category.");
            console.error("Error adding category:", error);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("🛠️ Submitting data:", formData);

        if (!formData.studentID) {
            alert("❌ Student ID is missing. Please log in again.");
            return;
        }

        try {
            await addCulturalDetail(formData);
            alert("✅ Cultural details added successfully!");
        } catch (error) {
            console.error("❌ Failed to submit details:", error.response?.data || error.message);
            alert("❌ Submission failed. Please try again.");
        }
    };

    return (
        <div className="grid grid-cols-6 mt-20">
            <div className="pt-16">
                <Sidebar />
            </div>
            <div className="col-span-5 bg-white py-10 px-20 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-700 mb-8">Technical Events Details</h1>
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                    {/* ✅ Event Name Selection */}
                    <div>
                        <label className="block text-lg font-bold text-gray-700">Event Name *</label>
                        <select name="eventID" value={formData.eventID} onChange={handleChange} required className="w-1/2 px-4 py-2 mt-2 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Event Name</option>
                            {eventNames.map(event => (
                                <option key={event.eventID} value={event.eventID}>
                                    {event.name}
                                </option>
                            ))}
                        </select>

                        <Input1
                            labelText="Or enter new event name"
                            name="customEventName"
                            value={formData.customEventName}
                            onChange={handleChange}
                            disabled={!!formData.eventID} 
                        />

                        <Button
                            buttonText="Add New Event"
                            onClick={handleAddNewEvent}
                            type="button" 
                            disabled={loading}
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-bold text-gray-700 mt-10">Event Category *</label>
                        <select name="eventCategoryID" value={formData.eventCategoryID} onChange={handleChange} required className="w-1/2 px-4 py-2 mt-2 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Select Category</option>
                            {eventCategories.map(category => (
                                <option key={category.eventCategoryID} value={category.eventCategoryID}>
                                    {category.eventCategoryName}
                                </option>
                            ))}
                        </select>

                        {/* ✅ New Category Input */}
                        <Input1
                            labelText="Or enter new category"
                            name="customEventCategory"
                            value={formData.customEventCategory}
                            onChange={handleChange}
                            disabled={!!formData.eventCategoryID} // ✅ Disable if dropdown is selected
                        />

                        {/* ✅ Add New Category Button */}
                        <Button
                            buttonText="Add New Category"
                            onClick={handleAddNewCategory}
                            type="button" // Explicitly set type to "button"
                            disabled={loading}
                        />
                    </div>

                    {/* ✅ Other Form Fields */}
                    <CustomDatePicker labelText="Event Date *" selectedDate={formData.eventDate} onChange={handleDateChange} required className="mt-6"/>
                    <Input1 labelText="Role *" name="role" value={formData.role} onChange={handleChange} required/>
                    <label className="block text-lg font-bold text-gray-700 mt-10">Achievement:</label>
                    <select name="achievement" value={formData.achievement} onChange={handleChange} className="w-1/2 px-4 py-2 mt-2 mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select Achievement</option>
                        <option value="1st">1st Place</option>
                        <option value="2nd">2nd Place</option>
                        <option value="3rd">3rd Place</option>
                        <option value="Consolation">Consolation</option>
                    </select>
                    <Input1 labelText="Achievement Details" name="achievementDetails" value={formData.achievementDetails} onChange={handleChange} />
                    <Input1 labelText="Other Details" name="otherDetails" value={formData.otherDetails} onChange={handleChange} />

                    {/* ✅ Submit Button */}
                    <Button buttonText="Submit" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default UpdateCulturalDetails;
