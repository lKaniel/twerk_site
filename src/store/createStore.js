import { createStore } from 'redux';
import rootReducer from "./reducers/rootReducer";

// preloadedState will be passed in by the plugin
export default preloadedState => {
    return createStore(rootReducer, preloadedState);
};