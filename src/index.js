import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/root';
//CSS
import './assets/css/boostrap/bootstrap.css'
import './assets/css/itrade.css'


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();