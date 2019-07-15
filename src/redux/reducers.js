import { combineReducers } from 'redux';

// Reducers
import changeDataReducer from './changeDataReducer';
import {BookReducer} from './createReducer'

// Combine Reducers
const reducers = combineReducers({
    changeDataReducer,
    BookReducer
});

export default reducers;
