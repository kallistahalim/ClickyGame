import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


function imageRender(props){
  console.log(props);
    return(
<div className="wrapper">
      <div className="image-border">
        <img className="each-image" width='200' alt="doggy" src={props.image} />
      </div>
      <button onClick={() => props.ifFalsePlusOne(props.id)}>
        Click Me
      </button>
</div>
    )
}

export default imageRender;