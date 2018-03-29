import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Root from './components/root';
//CSS
import './assets/scss/boostrap/bootstrap.css'
import './assets/scss/itrade.css'
import 'react-circular-progressbar/dist/styles.css';


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();