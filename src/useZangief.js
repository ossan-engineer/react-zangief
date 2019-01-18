import React, { useState } from 'react';
import zangiefDefault from './images/zangiefDefault.gif';
import zangiefStand from './images/zangiefStand.gif';
import zangiefWalk from './images/zangiefWalk.gif';
import zangiefJump from './images/zangiefJump.gif';
import zangiefLightAttack from './images/zangiefLightAttack.gif';
import zangiefDamaged from './images/zangiefDamaged.gif';

const useZangief = () => {
  const [action, setAction] = useState('Default');
  const [size, setSize] = useState(256);
  const getImageSource = state => {
    switch (state) {
      case 'stand':
        return zangiefStand;
      case 'walk':
        return zangiefWalk;
      case 'jump':
        return zangiefJump;
      case 'lightAttack':
        return zangiefLightAttack;
      case 'damaged':
        return zangiefDamaged;
      default:
        return zangiefDefault
    }
  };

  const Zangief = () => (
    <img
      src={getImageSource(action)}
      alt="Zangief"
      width={size}
      style={{
        imageRendering: 'pixelated',
      }}
    />
  );

  return {
    action,
    setAction,
    size,
    setSize,
    Zangief,
  }
};

export default useZangief;
