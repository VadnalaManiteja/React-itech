import React from "react";

function Hero() {
  return (
    <div style={{
      background: "linear-gradient(to right, #4facfe, #00f2fe)",
      color: "#fff",
      textAlign: "center",
      padding: "4rem 1rem",
    }}>
      <h1>iTech Solutions</h1>
      <p>Empowering your workflow with the best software solutions.</p>
      {/* <div>
        <button style={{
          margin: "0.5rem",
          padding: "0.8rem 1.5rem",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}>Learn More</button>
        <button style={{
          margin: "0.5rem",
          padding: "0.8rem 1.5rem",
          backgroundColor: "#6c757d",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}>Get Started</button>
      </div> */}
    </div>
  );
}

export default Hero;
