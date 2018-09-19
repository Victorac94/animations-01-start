import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
  const backdropClasses = ["Backdrop", props.show ? "BackdropOpen" : "BackdropClosed"];

  return <div className={backdropClasses.join(" ")}></div>
};

export default backdrop;
