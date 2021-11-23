import { Switch, Redirect } from "react-router-dom";

import PublicRoute from "./shared/components/PublicRoute";
import PrivateRoute from "./shared/components/PrivateRoute";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage"

const Routes = ()=> {
    return (
        <Switch>
            <PrivateRoute exact path="/" redirectTo="/login">
                <Redirect to="/products" />
            </PrivateRoute>
            <PublicRoute exact path="/register" redirectTo="/products">
                <RegisterPage />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/products">
                <LoginPage />
            </PublicRoute>
            <PrivateRoute exact path="/products" redirectTo="/login">
                <ProductsPage />
            </PrivateRoute>
        </Switch>
    )
}

export default Routes;