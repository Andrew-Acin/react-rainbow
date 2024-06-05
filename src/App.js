import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ColorBlock from './colorBlock';
import ColorForm from './ColorForm';

function App() {
  let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])

  let addColor = (color) => {
    setColors([...colors, color]);
  };

  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color} />
    )
  })

  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor}/>
    </div>
  );
}

export default App;


