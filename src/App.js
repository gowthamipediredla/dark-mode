import React, { useState, useEffect } from "react";
import "./styles.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode and update <html> class
  useEffect(() => {
    // If condition is true, it adds the class 'className'.
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>

      <h1>{darkMode ? "Dark Mode" : "Light Mode"} is ON</h1>
      <p>This is some example content.</p>
    </div>
  );
}

export default App;
