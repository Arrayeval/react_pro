import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware  from 'redux-saga'
import Reducers from './reducers'
// import { helloSaga } from '../saga/helloSage';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(Reducers,
    applyMiddleware(sagaMiddleware)
    )
 
// sagaMiddleware.run(helloSaga)    
export default store