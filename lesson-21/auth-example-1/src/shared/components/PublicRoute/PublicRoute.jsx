import { Route, Redirect } from "react-router";

import useAuth from "../../hooks/useAuth";

const PublicRoute = ({children, redirectTo, exact, path})=> {
    const islogin = useAuth();

    return (
        <Route exact={exact} path={path}>
            {islogin ? <Redirect to={redirectTo} /> : children}
        </Route>
    )
}

export default PublicRoute;