import { combineReducers } from 'redux';

// Reducers
import changeDataReducer from './changeDataReducer';

// Combine Reducers
var reducers = combineReducers({
    changeDataReducer
});

export default reducers;
