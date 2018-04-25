import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './styles/css/style.css';

// Components
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
