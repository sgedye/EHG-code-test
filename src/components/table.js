import React from 'react'

function table() {
  // const hexColor = j => {
  //   let redValue = (8 * Math.floor(j / 1024)).toString(16).padStart(2, '0')
  //   let greenValue = (8 * (Math.floor(j / 32) % 32)).toString(16).padStart(2, '0')
  //   let blueValue = (8 * (j % 32)).toString(16).padStart(2, '0')
    
  //   // console.log(j, redValue, greenValue, blueValue)
  //   return `#${redValue}${greenValue}${blueValue}`
  // }
  // Creating an 2D array with 256 rows and 128 columns.
  const tableContents = [...new Array(1024)].map((row,rowI) => (
    <tr id={`row-${rowI}`} key={`row-${rowI}`}>
      {[...new Array(32)].map((col, colI) => (
        <td
          key={`col-${colI}`}
          id={`${rowI}-${colI}`}
          //style={{backgroundColor: hexColor(rowI * 32 + colI)}}
        >
        </td>
      ))}
    </tr>
  ))

  // let row = [...new Array(32)].map((el, i)=> <Td key={`col-${i}`}>{i}</Td>)
  // let tableContents = [...new Array(32)].map((el,i) => <tr key={`row-${i}`}>{row}</tr>)

  return (
    <table id="colour-table">
      <tbody>{tableContents}</tbody>
    </table>
  )
}

export default table
