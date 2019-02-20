import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import store from './Redux/store';


ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
);
