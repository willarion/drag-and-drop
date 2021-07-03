import React from 'react';
import './Shape.css'

function Shape(props) {

  const initialShapePosition = props.circle 
    ? { top: 120, left: 80 } 
    : { top: 240, left: 80 }
  
  const [isDragging, setIsDragging] =  React.useState(false)
  const [coordinates, setCoordinates] = React.useState(initialShapePosition)
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
    <div className={props.circle ? "circle" : 'square'} 
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

export default Shape;