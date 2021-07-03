import React from 'react';
import './Figures.css'
import Shape from './Shape';


function Figures(props) {
  return (
    <div className="figures">
      <p className="figures__title">Figures</p>
      <div className="figures__container">
        <Shape 
          handleClick={props.handleClick}  
          circle={true}
        />
        <Shape 
          handleClick={props.handleClick}  
          circle={false}
        />
      </div>
    </div>
  );
}

export default Figures;