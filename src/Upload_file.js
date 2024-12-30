import React from "react";
import "./Upload.css"; // Importing the CSS file
import Cards from "./Cards";


function Upload() {
  return (
    <div className="upload-container">
      <h2>Upload Form</h2>
      <form>
        <label>
          Software Name:
          <input type="text" name="softwareName" />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description" rows="4" cols="50"></textarea>
        </label>
        <br />
        <label>
          Upload File:
          <input type="file" />
        </label>
        <br />
        <button type="submit" className="upload-button">Submit</button>
      </form>

    </div>
  );
  
}

export default Upload;
