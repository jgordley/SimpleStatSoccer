import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import SetupGame from "./containers/SetupGame";
import Game from "./containers/Game";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path='/setup'>
                <SetupGame />
            </Route>

            <Route exact path='/game'>
                <Game />
            </Route>

            {/* Finally, catch all unmatched routes */}
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}