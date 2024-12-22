import React, { useState } from "react";
import "./upload.css";

const Upload = () => {
  const [noteDetails, setNoteDetails] = useState({
    title: "",
    semister: "",
    category: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNoteDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setNoteDetails((prevState) => ({
      ...prevState,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the uploaded notes here
    console.log("Uploaded Details:", noteDetails);
    alert("Notes uploaded successfully!");
    setNoteDetails({ title: "", description: "", category: "", file: null });
  };

  return (
    <div className="upload-notes-container">
      <h2>Upload Your Notes</h2>
      <form className="upload-notes-form" onSubmit={handleSubmit}>
        {/* Title */}
        <div className="form-group">
          <label htmlFor="title">Note Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={noteDetails.title}
            onChange={handleInputChange}
            placeholder="Enter the title of the notes"
            required
          />
        </div>

        {/* Semister */}
        <div className="form-group">
          <label htmlFor="semister">Semister</label>
          <select
            id="semister"
            name="semister"
            value={noteDetails.semister}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Semister</option>
            <option value="Semister 1">Semister 1</option>
            <option value="Semister 2">Semister 2</option>
            <option value="Semister 3">Semister 3</option>
            <option value="Semister 4">Semister 4</option>
            <option value="Semister 5">Semister 5</option>
            <option value="Semister 6">Semister 6</option>
            <option value="Semister 7">Semister 7</option>
            <option value="Semister 8">Semister 8</option>
          </select>
        </div>

        {/* Category */}
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={noteDetails.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
          </select>
        </div>

        {/* File Upload */}
        <div className="form-group">
          <label htmlFor="file">Upload File</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            accept=".pdf,.docx,.ppt,.txt"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          Upload Notes
        </button>
      </form>
    </div>
  );
};

export default Upload;
