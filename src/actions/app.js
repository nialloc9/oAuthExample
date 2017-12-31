import { APP_SET } from '../constants/app';

/**
 * sets the view for app
 * @param view
 */
export const setView = view => dispatch => dispatch({
    type: APP_SET,
    payload: {
       view
    }
});

/**
 * registers a new user
 * @param username
 * @param password
 */
export const register = ({ username, password }) => dispatch => fetch("http://localhost:3001/api", {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        method: "register",
        username,
        password
    })
});

/**
 * logs a user in
 * @param username
 * @param password
 */
export const login = ({ username, password }) => dispatch => fetch("http://localhost:3001/api", {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        method: "login",
        username,
        password
    })
});
