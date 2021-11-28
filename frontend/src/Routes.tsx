import NotFound from "components/NotFound";
import Answers from "pages/answers";
import Home from "pages/Home";
import Login from "pages/Login";
import Questions from "pages/Questions";
import Responses from "pages/Responses";
import SignUp from "pages/SignUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signin" exact>
                    <SignUp/>
                </Route>
                <Route path="/answers" exact>
                    <Answers/>
                </Route>
                <Route path="/questions" exact>
                    <Questions/>
                </Route>
                <Route path="/responses" exact>
                    <Responses/>
                </Route>
                <Route path="">
                    <NotFound/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;