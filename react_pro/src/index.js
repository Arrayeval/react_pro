import React from 'react';
import ReactDOM from 'react-dom';
import './scss/common.scss';
import './scss/reset.scss'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
