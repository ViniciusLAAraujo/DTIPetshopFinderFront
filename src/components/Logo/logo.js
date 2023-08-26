import React from 'react';
import newLogo from '../../assets/logo.png';

function Logo({ className }) {
  return (
      <img src={newLogo} alt="Logo" className={className}/>
  );
}

export default Logo;