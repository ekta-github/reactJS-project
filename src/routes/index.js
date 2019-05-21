import React from "react";
import { Route, Switch } from 'react-router-dom';
import Posts from 'ui/pages/posts';
import ErrorPage from 'ui/pages/Error';

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Posts} />
                <Route component={ErrorPage} />
            </Switch>
        )
    }
}

export default Routes;