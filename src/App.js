import React, {useState} from 'react';
import CarsForm from "./components/CarsForm";
import Cars from "./components/Cars";

const App = () => {
    const [trigger,setTrigger] = useState(null);
    const [carForUpdate,setСarForUpdate] = useState(null);
  return (
      <div>
        <CarsForm setTrigger={setTrigger} carForUpdate={carForUpdate} setСarForUpdate={setСarForUpdate}/>
          <hr/>
          <Cars trigger={trigger} setTrigger={setTrigger} setСarForUpdate={setСarForUpdate}/>
      </div>
  );
};

export default App;
