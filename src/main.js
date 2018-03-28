import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";


ReactDOM.render(
    <Provider store={store}>
        <p>Hello World</p>
    </Provider>,
    document.getElementById('app')
);