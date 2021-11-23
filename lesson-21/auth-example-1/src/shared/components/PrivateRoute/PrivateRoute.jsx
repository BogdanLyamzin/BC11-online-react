import { Route, Redirect } from "react-router";

import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({children, redirectTo, ...routeProps})=> {
    const islogin = useAuth();

    return (
        <Route {...routeProps}>
            {!islogin ? <Redirect to={redirectTo} /> : children}
        </Route>
    )
}

export default PrivateRoute;