import { backend_url } from '../Pages/BackendURL';
import { EVENT_ERROR, EVENT_LOADING, GETDATA } from './Type';

export const getCapsules = (page) => async (dispatch) => {
    dispatch({ type: EVENT_LOADING });
    try {
        let res = await fetch(`${backend_url}/spacex/capsules?page=${page}`, {
            headers: {
                "content-type": "application/json",
                token: localStorage.getItem('token'),
            }
        });
        let data = await res.json();
        if (data.status === "Ok") {
            dispatch({ type: GETDATA, payload: data.msg });
        }
    } catch (e) {
        dispatch({ type: EVENT_ERROR });
    }
};

export const serachCapsules = (search) => async (dispatch) => {
    dispatch({ type: EVENT_LOADING });
    try {
        let res = await fetch(`${backend_url}/spacex/capsules?search=${search}`, {
            headers: {
                "content-type": "application/json",
                token: localStorage.getItem('token'),
            },
        });
        let data = await res.json();
        if (data.status === "Ok") {
            dispatch({ type: GETDATA, payload: data.msg });
        }
    } catch (e) {
        dispatch({ type: EVENT_ERROR });
    }
};

export const statusCapsules = (status) => async (dispatch) => {
    dispatch({ type: EVENT_LOADING });
    try {
        let res = await fetch(`${backend_url}/spacex/capsules?status=${status}`, {
            headers: {
                "content-type": "application/json",
                token: localStorage.getItem('token'),
            }
        });
        let data = await res.json();
        if (data.status === "Ok") {
            dispatch({ type: GETDATA, payload: data.msg });
        }
    } catch (e) {
        dispatch({ type: EVENT_ERROR });
    }
};

export const typesCapsules = (type) => async (dispatch) => {
    dispatch({ type: EVENT_LOADING });
    try {
        let res = await fetch(`${backend_url}/spacex/capsules?type=${type}`, {
            headers: {
                "content-type": "application/json",
                token: localStorage.getItem('token'),
            },
        });
        let data = await res.json();
        if (data.status === "Ok") {
            dispatch({ type: GETDATA, payload: data.msg });
        }
    } catch (e) {
        dispatch({ type: EVENT_ERROR });
    }
};