import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './styles/css/style.css';

// Components
import Navbar from './components/Navbar';
import App from './components/App';
import LandingPage from './components/LandingPage';
import Browse from './components/Browse';

// React Router Dom
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// React-Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

// Includes
import { setSession } from './inc/setSession';
import { checkSession } from './inc/checkSession';

import registerServiceWorker from './registerServiceWorker';

// Save token and expiry time to sessionStorage
setSession();

// This checks if token has expired.
// It will remove the token and expiry time if token has expired
checkSession();


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props => (
      window.sessionStorage.token
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
);

console.log(window.sessionStorage);


// Create store
const store = createStore(rootReducer);


ReactDOM.render(

    <Provider store={ store } >
    
        <BrowserRouter>

            <div>

                <Route exact path="/" component={ App } />
                <Route exact path="/" component={ LandingPage } />
                <Route path="/browse" component={ Navbar } />
                <PrivateRoute exact path="/browse" component={ Browse } />

            </div>

        </BrowserRouter>

    </Provider>

, document.getElementById('root'));
registerServiceWorker();
