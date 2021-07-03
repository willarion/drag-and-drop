import React from 'react';
import './App.css';
import Figures from './Figures';
import Canvas from './Canvas';
import Shape from './Shape';


function App() {

  const [circleId, setCircleId] = React.useState(1)
  const [circles, setCircles] = React.useState([{id: 0, name: 'изначальный круг'}])
  const [squareId, setSquareId] = React.useState(1)
  const [squares, setSquares] = React.useState([{id: 0, name: 'изначальный квадрат'}])
  // const [previousFigure, setPreviousFigure] = React.useState({})

  function handleId(setter) {
    setter((prevState) => (prevState += 1))
  }

  function createCircle() {
   
    handleId(setCircleId)

    const newCircle = {id: circleId, name: 'круг' }
    setCircles([...circles, newCircle])
  }

  function createSquare() {

    handleId(setSquareId)

    const newSquare = {id: squareId, name: 'квадрат' }
    setSquares([...squares, newSquare])
  }


  function createShapeDuplicate(circle) {
    if (circle) {
      createCircle()
      return
    }
    createSquare()
  }

  // const previousFigure = React.useRef(null)

  // function handleUpperPosition(id, setUpper) {
  //   console.log(id, 'id')
  //   console.log(previousFigure.current + ' current')

  //   if (previousFigure.current === null || previousFigure.current === id) {
  //     setUpper(true)

  //     previousFigure.current = id;
  //     return
  //   }
    
  //   previousFigure.current = id;

  //   setUpper(false)
  // }


  return (
    <div className="App">
      <Figures />
      <Canvas />
      <Shape 
        hangleFigure={createShapeDuplicate}
        circle={true}
        isDraggable={false}
        />
      <Shape 
        hangleFigure={createShapeDuplicate}
        circle={false}
        isDraggable={false}
      />
      { circles.length > 0 && circles.map((circle) => 
        <Shape key={circle.id}
          id={`${circle.id}ci`}
          circle={true}
          isDraggable={true}
      //    handlePosition={handleUpperPosition}
        />
      )}
      { squares.length > 0 && squares.map((square) => 
        <Shape key={square.id}
          id={`${square.id}sq`}
          circle={false}
          isDraggable={true}
       //   handlePosition={handleUpperPosition}
        />
      )}
    </div>
  );
}

export default App;
