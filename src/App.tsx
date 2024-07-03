import React, {FC} from 'react';
import './App.css';
import SwitchComponent from "./component/switch/SwitchComponent";
import PreviousComponent from "./component/previous/PreviousComponent";

const App:FC = () => {

  return (
      <div>

          {/*<SwitchComponent/>*/}
          <PreviousComponent/>

      </div>
  );
}

export default App;
