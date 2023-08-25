import React from 'react';
import newLogo from './logo.png';

function Logo({ className }) {
  return (
      <img src={newLogo} alt="Logo" className={className}/>
  );
}

export default Logo;