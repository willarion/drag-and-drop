import React from 'react';
import './App.css';
import Figures from './Figures';
import Canvas from './Canvas';
import Circle from './Circle';


function App() {

  const [circleId, setCircleId] = React.useState(0)
  const [circles, setCircles] = React.useState([])

  function handleId() {
    setCircleId((prevState) => (prevState += 1))
  }

  function createCircle() {
    const newCircle = {id: circleId, name: 'круг' }
    setCircles([...circles, newCircle])
  }

  console.log(circleId)
  console.log(circles)


  return (
    <div className="App" 
    // onClick={() => {
    //   createCircle()
    //   handleId()
    // }}
    >
      <Figures 
      />
      <Canvas />
      { circles.length > 0 && circles.map((circle) => 
        <Circle key={circle.id}
          id={circle.id}
        />
      )}
    </div>
  );
}

export default App;
