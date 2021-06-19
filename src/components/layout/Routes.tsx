
import EntitiesPage from "components/pages/entities/EntitiesPage";
import NotFound404 from "components/pages/errors/NotFound404";
import HomePage from "components/pages/home/HomePage";
import ProfilePage from "components/pages/profile/ProfilePage";
import WorkspacesPage from "components/pages/workspaces/WorkspacesPage";
import { FC } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const Routes: FC = () => {

    return (

        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/publications" />
            <Route path="/people" />
            <Route path="/entities" component={EntitiesPage} />
            <Route path="/administration" />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/workspaces" component={WorkspacesPage} />

            <Route component={NotFound404} />

        </Switch>

    )

}

export default Routes;