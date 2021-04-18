import NotFound404 from "components/pages/errors/NotFound404";
import { FC } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const Routes: FC = () => {

    return (
        <Router>
            <Switch>
                <Route path="/home" />
                <Route path="/publications" />
                <Route path="/people" />
                <Route path="/entities" />
                <Route path="/administration" />

                <Route component={NotFound404} />

            </Switch>
        </Router>
    )

}

export default Routes;