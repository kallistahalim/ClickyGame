import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


function imageRender(props){
    return(
<div className="wrapper">
      <div className="image-border">
        <img className="each-image" width='200' alt="doggy" src={props.image} />
      </div>
      <span onClick={() => props.ifFalsePlusOne(props.image)}>

      </span>
</div>
    )
}

export default imageRender;