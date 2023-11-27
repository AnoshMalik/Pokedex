// client/src/App.js
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Express App</h1>
        <p>{data && data.message} HEYY</p>
      </header>
    </div>
  );
}

export default App;
