import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import App from './components/app/App'
import './index.scss';

const AppWithHot = hot(module)(App);

ReactDOM.render(<AppWithHot />, document.getElementById('root'));
