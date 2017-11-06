import React from 'react';
import { render } from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import { fetchResources } from './actions/resourceActions';
import { createBrowserHistory } from 'history';

// Create the store
const store = configureStore();
store.dispatch(fetchResources());


render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


