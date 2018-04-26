import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './styles/css/style.css';

// Components
import App from './components/App';
import LandingPage from './components/LandingPage';
import Browse from './components/Browse';

// React Router Dom
import { BrowserRouter, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

    <BrowserRouter>

        <div>
            
            <Route exact path="/" component={ App } />
            <Route exact path="/" component={ LandingPage } />
            <Route exact path="/browse" component={ Browse } />

        </div>

    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
