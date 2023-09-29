import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import SampleSurvey from './components/SampleSurvey';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/'>
          <App />
        </Route>
        <Route path='/sample'>
          <SampleSurvey />
        </Route>
        {/* <Route path='/spi'>
          <SPI />
        </Route> */}
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
