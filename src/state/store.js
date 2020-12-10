import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import sagas from './sagas';
// import { loginSaga } from './login/login.sagas';
// import { homeSaga } from './home/home.sagas';

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(initialiseSagaMiddleware)));

initialiseSagaMiddleware.run(sagas);

export default store;
