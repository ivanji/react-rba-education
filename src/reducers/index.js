import {combineReducers} from 'redux';
import resourceReducer from './resourceReducer';
import visibilityReducer from './visibilityReducer';

const rootReducer = combineReducers({
    //visibilityReducer,
    resourceReducer
});

export default rootReducer;