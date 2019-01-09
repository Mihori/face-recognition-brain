import React from 'react';
import Tilt from 'react-tilt'
import brain from './brain.png';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner pa3"><img style={{ paddingTop: '5px', height: '100px' }} src={brain} alt="logo" /></div>
      </Tilt>
    </div>
  )
}

export default Logo;
