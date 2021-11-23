import {createReducer} from "@reduxjs/toolkit";

import actions from "./auth-actions";

const initialState = {
    user: {
        name: "",
        email: ""
    },
    token: null,
    loading: false,
    error: null
}

const authReducer = createReducer(initialState, {
    [actions.registerRequest]: (state, _) => ({...state, error: null, loading: true}),
    [actions.registerSuccess]: (state, {payload}) => ({...state, ...payload, loading: false}),
    [actions.registerError]: (state, {payload}) => ({...state, error: payload, loading: false}),

    [actions.loginRequest]: (state, _) => ({...state, error: null, loading: true}),
    [actions.loginSuccess]: (state, {payload}) => ({...state, ...payload, loading: false}),
    [actions.loginError]: (state, {payload}) => ({...state, error: payload, loading: false}),

    [actions.logoutRequest]: (state, _) => ({...state, error: null, loading: true}),
    [actions.logoutSuccess]: (_, __) => ({...initialState}),
    [actions.logoutError]: (state, {payload}) => ({...state, error: payload, loading: false}),

    [actions.getCurrentRequest]: (state, _) => ({...state, error: null, loading: true}),
    [actions.getCurrentSuccess]: (state, {payload}) => ({...state, ...payload, loading: false}),
    [actions.getCurrentError]: (state, {payload}) => ({...state, error: payload, loading: false})
});

export default authReducer;