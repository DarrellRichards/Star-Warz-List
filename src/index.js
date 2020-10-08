import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Main from './Main';
import Person from './Components/Person/person';
import store from './Redux/store';


ReactDOM.render(
    <Provider store={store}>
        <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
            <Route path="/person/:name">
                <Person />
            </Route>
            <Route path="/">
                <Main />
            </Route>
        </Switch>
     </Router>
    </Provider>,
    document.getElementById('root')
);
