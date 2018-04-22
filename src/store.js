import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'

import testReducer from './reducers/testReducer'
import courses_organizer_reducer from './reducers/courses_organizer/courses_organizer_reducer'

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(combineReducers({
    courses: courses_organizer_reducer,

    form: reduxFormReducer // mounted under "form"
}), middleware);