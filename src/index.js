import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';

import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import { fetchResources } from './actions/resourceActions';

// Create the store
const store = configureStore();
store.dispatch(fetchResources());

render(<Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={App} />
                    <Route path='/education/topic/' component={App} />
                    <Route path='/education/audience/' component={App} />
                </Switch>
            </BrowserRouter>
        </Provider>,
    document.getElementById('root')
);
