import React from 'react';
import ReactDOM from 'react-dom';
import './scss/common.scss';
import './scss/reset.scss'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App >
  {/* <p>1</p>
  <p>2</p>
  <p>3</p> */}
</App>, document.getElementById('root'));
registerServiceWorker();
