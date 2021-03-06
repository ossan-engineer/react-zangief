import React from 'react';
import useZangief from '../../src/useZangief';

const App = props => {
  const {
    action,
    setAction,
    size,
    setSize,
    Zangief,
  } = useZangief();

  return (
    <div className="">
      <select name="" id="" onChange={(e) => setAction(e.target.value)}>
        <option value="default">Default</option>
        <option value="stand">Stand</option>
        <option value="walk">Walk</option>
        <option value="jump">Jump</option>
        <option value="lightAttack">Light Attack</option>
        <option value="damaged">Damaged</option>
      </select>
      <input
        type="range"
        onChange={e => setSize(e.target.value)}
        value={size}
        min={16}
        max={2000}
      />
      <span>{size}</span>
      <div>
        <Zangief />
      </div>
    </div>
  )
};

export default App;
