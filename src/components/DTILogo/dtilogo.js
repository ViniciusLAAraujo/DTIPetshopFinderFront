import React from 'react';
import newLogo from './dtilogo.png';

function DTILogo({ className }) {
  return (
      <img src={newLogo} alt="DTI Logo" className={className}/>
  );
}

export default DTILogo;