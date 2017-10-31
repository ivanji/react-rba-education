import {createStore } from 'redux';
import rootReducer from '../reducers';
import {applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(ReduxThunk)
    )
}