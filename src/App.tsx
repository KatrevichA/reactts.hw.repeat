import React, {FC} from 'react';
import './App.css';
import Simpson from "./component/simpson/Simpson";
import {simpsons} from "./data";
import {ISimpson} from "./models/ISimpson";

const App:FC = () => {

  return (
    <div>
        {
            simpsons.map((simpson:ISimpson, index)=><Simpson key={index} simpson={simpson}/>)
        }
    </div>
  );
}

export default App;
