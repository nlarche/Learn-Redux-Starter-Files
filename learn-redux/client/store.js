import {createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// reducers
import rootReducer from './reducers/index';

// data
import comments from './data/comments';
import posts from './data/posts';

// Create a default state object
const defaultState = {
    posts,
    comments
};

const enhancers = compose(
    window.devToolsExtension ?  window.devToolsExtension() : f => f 
)

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot){
    module.hot.accept('./reducers/', ()=> {
        const newtRootReducer =  require('./reducers/index').default;
        store.replaceReducer(newtRootReducer)
    })
}

export default store;