import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import '../node_modules/toastr/build/toastr.min.css';
import './bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));
registerServiceWorker();
