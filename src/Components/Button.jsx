import React from 'react';

function Button(props) {
  return (
    <>
      <div className="port-btn" data-aos={props.aos}>
        <a href={props.link} class="custom-btn">
          <i class={props.class}></i> {props.name}
        </a>
      </div>
    </>
  );
}

export default Button;
