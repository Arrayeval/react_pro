import { combineReducers } from 'redux';

// Reducers
import changeDataReducer from './changeDataReducer';
import { BookReducer } from './createReducer'
import { fetchInfoReducer } from './fetchInfoReducer'

// Combine Reducers
const reducers = combineReducers({
    changeDataReducer,
    BookReducer,
    fetchInfoReducer
});

export default reducers;
