import React from 'react';
import { useState, useEffect } from 'react';
import Table from './components/table';
import './App.css';

export default function App() {
  
  //let [hexCode, setHexCode] = useState('')
  // let code = 'A8A808'

  useEffect(() => {
  //   const getNextHexColour = () => {
  //     // if (!hexCode) {
  //     //   setHexCode = 'F80808'
  //     // } else {
  //     //   setHexCode = (parseInt(hexCode, 16) + 8).toString(16)
  //     // }
  //     code = (parseInt(code) + 8).toString(16)
  //     console.log(code)
  //     return `#${code}`
  //   }

  //   const tableBody = document.getElementById('colour-table').children[0]
  //   for (let i=0; i<144; i++) {
  //     let row = Math.floor(i/12)
  //     let col = i % 12
  //     tableBody.children[row].children[col].style.background = getNextHexColour()
  //   }
    //colourTable()
    const tableBody = document.getElementById('colour-table').children[0]

    console.log("hi")
    console.log(tableBody)
    // console.log(tableBody.children[0].children[0].style.height = '20px')
    // tableBody.children[0].children[3].style.backgroundColor = 'red'
   
    console.log('--------')

  //   let x = document.getElementById('colour-table')
  //   console.log(x.children[0].children[5].children[3].style.background = 'red')
    
  //   x.children[0].children[5].children[5].style.background='blue'
  //   let colour = 'blue'
  //   for (let i=0; i<5; i++) {
  //     x.children[0].children[3].children[i].style.background = getNextHexColour(i)
  //   }
  }, [])

  function increasingHex() {
    const tableBody = document.getElementById("colour-table").children[0]
    for (let i = 0; i < 32768; i++) {
      const redValue = (8 * Math.floor(i / 1024)).toString(16).padStart(2, "0")
      const greenValue = (8 * (Math.floor(i / 32) % 32)).toString(16).padStart(2, "0")
      const blueValue = (8 * (i % 32)).toString(16).padStart(2, "0")
      tableBody.children[Math.floor(i / 32)].children[i % 32]
        .style.backgroundColor = `#${redValue}${greenValue}${blueValue}`
    }
  }
  const decresingHex = () => {
    const tableBody = document.getElementById("colour-table").children[0]
    let count = 32768
    for (let i = 0; i < 32768; i++) {
      count--
      console.log(i, tableBody)
      const redValue = (8 * Math.floor(count / 1024)).toString(16).padStart(2, "0")
      const greenValue = (8 * (Math.floor(count / 32) % 32)).toString(16).padStart(2, "0")
      const blueValue = (8 * (count % 32)).toString(16).padStart(2, "0")
      tableBody.children[Math.floor(i / 32)].children[i % 32]
        .style.backgroundColor = `#${redValue}${greenValue}${blueValue}`
    }
  }
  
  return (
    <div className="App">
      <h2>This is going to be a table of 32x1024 elements</h2>
      <button onClick={increasingHex}>Increasing Hex</button>
      <button onClick={decresingHex}>Decreasing Hex</button>
      {/* <button onClick={decresingHex}>Decreasing Hex</button> */}
      <Table />
    </div>
  )
}