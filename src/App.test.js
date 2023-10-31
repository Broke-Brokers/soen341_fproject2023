import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

{/*Basic smoke test for component taken from :https://create-react-app.dev/docs/running-tests  */}