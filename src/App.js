import times from "lodash/times";
import React from "react";
import ProgressiveImage from './Components/ProgressiveImage';

const App = () => {
  return (
    <div>
      <h1>Hello World this is Shivaraj Bakale</h1>
      {times(10, (i) => (
        <li>Hello {i}</li>
      ))}
      <ProgressiveImage src="https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      overlayImage="https://images.pexels.com/photos/2177009/pexels-photo-2177009.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=5"
      />
    </div>
  );
};

export default App;
