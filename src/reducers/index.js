import {combineReducers} from 'redux';
import {utils} from './utils';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    routing: routerReducer,
    utils
});
