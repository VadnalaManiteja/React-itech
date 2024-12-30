import React from "react";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#333", color: "#fff", padding: "1rem" }}>
      <h1 style={{ margin: 0 }}>iTech Solutions</h1>
      <ul style={{ display: "flex", listStyle: "none", gap: "1rem" ,justifyContent:"right" }}>
        <li><a href="/home" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
        <li><a href="/upload" style={{ color: "#fff", textDecoration: "none" }}>Upload</a></li>
        <li><a href="/list" style={{ color: "#fff", textDecoration: "none" }}>List</a></li>
        <li><a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact Us</a></li>
        <li><a href="/sample" style={{ color: "#fff", textDecoration: "none" }}>SamplePage</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
