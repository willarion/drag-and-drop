import React from 'react';
import './App.css';
import Shape from './Shape';


function App() {

  const [circleId, setCircleId] = React.useState(1)
  const [circles, setCircles] = React.useState([{id: '0ci', name: 'изначальный круг'}])
  const [squareId, setSquareId] = React.useState(1)
  const [squares, setSquares] = React.useState([{id: '0sq', name: 'изначальный квадрат'}])

  function handleId(setter) {
    setter((prevState) => (prevState += 1))
  }

  function createCircle() {
   
    handleId(setCircleId)

    const newCircle = {id: circleId + 'ci', name: 'круг' }
    setCircles([...circles, newCircle])
  }

  function createSquare() {

    handleId(setSquareId)

    const newSquare = {id: squareId + 'sq', name: 'квадрат' }
    setSquares([...squares, newSquare])
  }

  function createShapeDuplicate(circle) {
    if (circle) {
      createCircle()
      return
    }
    createSquare()
  }


  return (
    <div className="App" >
      <p className="title">Drag us around!</p>
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
          id={circle.id}
          circle={true}
          isDraggable={true}
        />
      )}
      { squares.length > 0 && squares.map((square) => 
        <Shape key={square.id}
          id={square.id}
          circle={false}
          isDraggable={true}
        />
      )}
    </div>
  );
}

export default App;
