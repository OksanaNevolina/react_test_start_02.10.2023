import React from 'react';
import CarsForm from "./components/CarsForm";
import Cars from "./components/Cars";

const App = () => {
  return (
      <div>
          <CarsForm/>
          <hr/>
          <Cars/>
      </div>
  );
};

export default App;
