import React from 'react';
import './Circle.css'

function Circle(props) {
  
  const [isDragging, setIsDragging] =  React.useState(false)
  const [coordinates, setCoordinates] = React.useState({ top: 120, left: 80 })
  const [prevСoordinates, setPrevCoordinates] = React.useState({ top: 0, left: 0 })

  console.log(isDragging, coordinates, prevСoordinates)

  function extractPositionDelta(e) {
    const left = e.pageX
    const top = e.pageY

    const delta = {
      left: left - prevСoordinates.left
      ,
      top: top - prevСoordinates.top,
    }

    setPrevCoordinates({top, left})

    return delta
  }

  function handleMouseDown(e) {
    setIsDragging(true)
    extractPositionDelta(e)
  }

  function handleMouseUp() {
    setIsDragging(false)
  }

  function handlePointerMove(e) {
    if (!isDragging) {
      return
    }

    const {left, top} = extractPositionDelta(e);
    console.log(left, top)

    setCoordinates({
      top: coordinates.top + top,
      left: coordinates.left + left,
    })

    console.log('движение')
  }



  return (
    <div className="circle" 
      onPointerMove={handlePointerMove}
      onPointerDown={handleMouseDown}
      onPointerUp={handleMouseUp}

      style={{
        top: `${coordinates.top}px`,
        left: `${coordinates.left}px`,
      }}
    >
    </div>
  );
}

export default Circle;