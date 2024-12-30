import React, { useEffect, useState } from 'react';
import './List.css'; 

const SoftwareTable = () => {
  const [softwares, setSoftwares] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetch('http://127.0.0.1:8000/softwares', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setSoftwares(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Handle Edit Action
  const handleEdit = (id) => {
    alert(`Edit software with ID: ${id}`);
    // Add your edit logic here
  };

  // Handle Delete Action
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete software with ID: ${id}?`);
    if (confirmDelete) {
      // Delete logic here (e.g., API call to delete)
      setSoftwares(softwares.filter(software => software.id !== id));
      alert(`Software with ID: ${id} has been deleted.`);
    }
  };

  return (
    <div className="software-table">
      <h1>Software List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>File</th>
            <th>Uploaded At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {softwares.map((software) => (
            <tr key={software.id}>
              <td>{software.id}</td>
              <td>{software.name}</td>
              <td>{software.description}</td>
              <td>
                <a href={software.file} download>
                  Download
                </a>
              </td>
              <td>{new Date(software.uploaded_at).toLocaleString()}</td>
              <td>
                <button onClick={() => handleEdit(software.id)}>Edit</button>
                <button onClick={() => handleDelete(software.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SoftwareTable;
