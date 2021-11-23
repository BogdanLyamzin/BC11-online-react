import actions from "./auth-actions";
import { fetchRegister, fetchLogin, fetchLogout, fetchCurrent } from "../../shared/services/auth";

export const register = (credentials) => {
    const func = async dispatch => {
        dispatch(actions.registerRequest());
        try {
            const data = await fetchRegister(credentials);
            dispatch(actions.registerSuccess(data));
        } catch (error) {
            dispatch(actions.registerError(error));
        }
    }

    return func;
}

export const login = (credentials) => {
    const func = async dispatch => {
        dispatch(actions.loginRequest());
        try {
            const data = await fetchLogin(credentials);
            dispatch(actions.loginSuccess(data));
        } catch (error) {
            dispatch(actions.loginError(error));
        }
    }

    return func;
}

export const logout = () => {
    const func = async dispatch => {
        dispatch(actions.logoutRequest());
        try {
            const data = await fetchLogout();
            dispatch(actions.logoutSuccess(data));
        } catch (error) {
            dispatch(actions.logoutError(error));
        }
    }

    return func;
}

export const getCurrent = () => {
    const func = async (dispatch, getState) => {
        dispatch(actions.getCurrentRequest());
        try {
            const {auth} = getState();
            const data = await fetchCurrent(auth.token);
            dispatch(actions.getCurrentSuccess(data));
        } catch (error) {
            dispatch(actions.getCurrentError(error));
        }
    }

    return func;
}