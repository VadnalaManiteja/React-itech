import React, { useEffect, useState } from 'react';
import './Cards.css'; // Optional: For custom styles

const SoftwareList = () => {
  const [softwares, setSoftwares] = useState([]);

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

  return (
    <div className="software-list">
      <h1>Software List</h1>
      <div className="cards-container">
        {softwares.map(software => (
          <div className="card" key={software.id}>
            <h2>{software.name}</h2>
            <p>{software.description}</p>
            <a href={software.file} download>
              Download
            </a>
            <p><small>Uploaded at: {new Date(software.uploaded_at).toLocaleString()}</small></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftwareList;
