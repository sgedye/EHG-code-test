import React from 'react'

function Table() {
  // Creating an 2D array with 1024 rows and 32 columns.
  const tableContents = [...new Array(1024)].map((row,rowI) => (
    <tr id={`row-${rowI}`} key={`row-${rowI}`}>
      {[...new Array(32)].map((col, colI) => (
        <td key={`col-${colI}`} id={`${rowI}-${colI}`}></td>
      ))}
    </tr>
  ))
  
  // let row = [...new Array(256)].map((el, i)=> <Td key={`col-${i}`}></Td>)
  // let tableContents = [...new Array(128)].map((el,i) => <tr key={`row-${i}`}>{row}</tr>)

  return (
    <table id="colour-table">
      <tbody>{tableContents}</tbody>
    </table>
  )
}

export default Table
