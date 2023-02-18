import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
  return (
    <>
      <div className="port-btn" data-aos={props.aos}>
        <Link to={props.link} class="custom-btn">
          <i class={props.class}></i> {props.name}
        </Link>
      </div>
    </>
  );
}

export default Button;
