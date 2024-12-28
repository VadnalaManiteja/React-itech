import React from "react";

function Navbar() {
  return (
    <nav style={{ backgroundColor: "#333", color: "#fff", padding: "1rem" }}>
      <h1 style={{ margin: 0 }}>iTech Solutions</h1>
      <ul style={{ display: "flex", listStyle: "none", gap: "1rem" ,justifyContent:"right" }}>
        <li><a href="/hero" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
        <li><a href="/cards" style={{ color: "#fff", textDecoration: "none" }}>Upload</a></li>
        <li><a href="/reg" style={{ color: "#fff", textDecoration: "none" }}>List</a></li>
        <li><a href="/table" style={{ color: "#fff", textDecoration: "none" }}>Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
