
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import SearchPage from './SearchPage';

const Routes = () => (
    <>
        <Switch>
          <Route exact path="/">
            <Redirect to="/en" />
          </Route>
          <Route
            exact
            path="/:lang"
            render={props => <SearchPage lang={props.match.params.lang} key={props.match.params.lang} />}
          />
        </Switch>
    </>
)

export default Routes;