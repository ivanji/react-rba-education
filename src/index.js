import React from 'react';
import { render } from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import { fetchResources } from './actions/resourceActions';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = configureStore();
store.dispatch(fetchResources());

render(<Provider store={store}>
    <Router>
        <Route path="/:filter?" component={App} />
    </Router>
</Provider>, document.getElementById('root'));


