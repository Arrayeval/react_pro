import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware  from 'redux-saga'
import Reducers from './reducers'
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(Reducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

// sagaMiddleware.run(helloSaga)    
export default store