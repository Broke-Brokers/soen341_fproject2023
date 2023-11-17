import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


//these tries did not work 
/*ReactDOM.render(<App/>,document.getElementById('root'));*/
/*const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
 
;




