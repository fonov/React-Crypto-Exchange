import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/index';
//CSS
import './assets/css/boostrap/bootstrap.css'
import './assets/css/itrade.css'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();