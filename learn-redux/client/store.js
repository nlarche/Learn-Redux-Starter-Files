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

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;