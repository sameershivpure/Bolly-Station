import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Station from './containers/Station';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Station />, document.getElementById('root'));
registerServiceWorker();
