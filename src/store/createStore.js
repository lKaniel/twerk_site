import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from "./reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import {mediaSagaWatcher} from "./sagas/mediaSagas";


const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});


// preloadedState will be passed in by the plugin
export default preloadedState => {
    const store =  createStore(rootReducer, preloadedState, composeEnhancers(
        applyMiddleware(sagaMiddleware)
    ));

    sagaMiddleware.run(mediaSagaWatcher)

    return store
};
