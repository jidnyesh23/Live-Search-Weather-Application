import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>

      <footer style={footerStyle}>
        <p style={textStyle}>
          © {new Date().getFullYear()}. Made by{" "}
          <span style={nameStyle}>Jidnyesh Chaudhari</span>{" "}
          <span style={separatorStyle}>|</span>{" "}
          <a
            href="https://www.linkedin.com/in/jidnyesh-chaudhari-2ba832211/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            LinkedIn
          </a>{" "}
          <span style={separatorStyle}>|</span>{" "}
          <a
            href="https://github.com/jidnyesh23"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            GitHub
          </a>
        </p>
      </footer>
    </React.Fragment>
  );
}

const footerStyle = {
  textAlign: "center",
  marginTop: "3rem",
  padding: "1.5rem",
  backgroundColor: "#f0f4f8",
  color: "#333",
  borderTop: "1px solid #ccc",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const textStyle = {
  marginBottom: "0.5rem",
  fontSize: "1rem",
};

const linkStyle = {
  textDecoration: "none",
  color: "#0077b5",
  fontWeight: "bold",
};

const nameStyle = {
  textDecoration: "none",
  color: "#000",
  fontWeight: "bold",
};

const separatorStyle = {
  color: "#999",
};

export default App;
