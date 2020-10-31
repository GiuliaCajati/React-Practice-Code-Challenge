import React, { Fragment } from 'react'

const Table = (props) => {
  let array = [];
  let length = props.emptyPlates; 
  for(let i = 0; i < length; i++) {
    array.push("sushi is so good!");
}
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }
  
  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.money } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            renderPlates(array)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table