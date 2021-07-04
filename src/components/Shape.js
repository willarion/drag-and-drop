import React from 'react';
import './Shape.css';

function Shape(props) {

  const initialShapePosition = props.circle 
    ? { top: 120, left: 80 } 
    : { top: 240, left: 80 }
  
  const [isDragging, setIsDragging] =  React.useState(false)
  const [coordinates, setCoordinates] = React.useState(initialShapePosition)
  const [prevСoordinates, setPrevCoordinates] = React.useState({ top: 0, left: 0 })
  const [isUpper, setIsUpper] = React.useState(false)

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
    e.preventDefault();

    setIsUpper(true)
    setIsDragging(true)
    extractPositionDelta(e)
  }

  function handleMouseUp(e) {
    setIsDragging(false)
    setIsUpper(false)
  }

  function handlePointerMove(e) {
    if (!isDragging) {
      return
    }

    const {left, top} = extractPositionDelta(e);

    setCoordinates({
      top: coordinates.top + top,
      left: coordinates.left + left,
    })
  }

 
  React.useEffect(() => {
    if (props.isDraggable) {

      function handleDelete(e) {
        if (e.key === 'Delete' ) {

          console.log(props)
          props.deleteFigure()
        }
      }
      
      document.addEventListener('keyup', handleDelete)
  
      return () => {
        document.removeEventListener('keyup', handleDelete)
      }
    }
  }, [props])

  return (
    <>
      { props.isDraggable
        ? 
        (<div draggable={true} className={props.circle ? "shape circle" : 'shape square'} 
            onPointerMove={handlePointerMove}
            onDragStart={handleMouseDown}
            onPointerUp={handleMouseUp}
            style={{
                top: `${coordinates.top}px`,
                left: `${coordinates.left}px`,
                cursor: isDragging ? 'grabbing' : 'grab',
                border: isDragging ? '3px solid black' : '1px solid black',
                zIndex: isUpper ? 999 : 0,
              }}
          />)
        :
        (<div className={props.circle ? "shape circle" : 'shape square'} 
          onMouseEnter={() => props.hangleFigure(props.circle)}
          style={{
            top: `${props.circle ? 120 : 240}px`,
            left: `80px`,}}
        />)
      }  
    </>
  );
}

export default Shape;