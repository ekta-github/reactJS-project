import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
ReactDOM.render( <Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));
