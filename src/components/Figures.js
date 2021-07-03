import React from 'react';
import './Figures.css'
import Circle from './Circle';
import Square from './Square';

function Figures(props) {
  return (
    <div className="figures">
      <p className="figures__title">Figures</p>
      <div className="figures__container">
        <Circle 
          handleClick={props.handleClick}  
        />
        <Square />
      </div>
    </div>
  );
}

export default Figures;