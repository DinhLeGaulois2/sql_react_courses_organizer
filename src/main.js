import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";

import TestContainer from './containers/TestContainer'

ReactDOM.render(
    <Provider store={store}>
        <TestContainer />
    </Provider>,
    document.getElementById('app')
);