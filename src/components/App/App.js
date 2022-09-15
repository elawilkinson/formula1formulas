import React from "react";

import './App.css';
import background from "../../AdobeStock_402785435.jpeg"
import RequestData from '../RequestData/requestdata.js';

function App() {  
  
  return (
    <div className="App" 
        style={{ 
          backgroundImage: `url(${background})`,
          backgroundPosition:'center', 
          backgroundRepeat: 'no-repeat',
          }}>
      <RequestData/>
    </div>
  );
}

export default App;
