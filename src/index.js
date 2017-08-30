import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import Routes from './Routes'


ReactDOM.render((
    <Router>
        <Routes />
    </Router>
), document.getElementById('root'));
registerServiceWorker();
