import React, { useEffect } from 'react';
import Table from './components/Table';
import './App.css';

export default function App() {
  useEffect(() => {
    const tableBody = document.getElementById("colour-table").children[0]
    for (let i = 0; i < 32768; i++) {
      const redValue = (8 * Math.floor(i / 1024)).toString(16).padStart(2, "0")
      const greenValue = (8 * (Math.floor(i / 32) % 32)).toString(16).padStart(2, "0")
      const blueValue = (8 * (i % 32)).toString(16).padStart(2, "0")
      tableBody.children[Math.floor(i / 32)].children[i % 32]
        .style.backgroundColor = `#${redValue}${greenValue}${blueValue}`
    }
  }, [])

  return (
    <div className="App">
      <h2>This is a simple 32x1024 table of colours elements:</h2>
      <Table />
    </div>
  )
}