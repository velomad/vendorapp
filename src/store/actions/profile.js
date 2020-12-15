import Axios from "axios"
import {
    PROFILE_LOAD,
    PROFILE_FETCH,
    // PROFILE_ERROR,
    UPDATE_PROFILE_REQUEST_LOAD,
    UPDATE_PROFILE_REQUEST_FETCH,
    // UPDATE_PROFILE_REQUEST_ERROR,
    UPDATE_PROFILE,
    UPDATE_SERVICERANGE_LOAD,
    UPDATE_SERVICERANGE_FETCH,
    // UPDATE_SERVICERANGE_ERROR,
    UPDATE_MOV_LOAD,
    UPDATE_MOV_FETCH,
    // UPDATE_MOV_ERROR,
    UPDATE_PROFILE_IMAGE_LOAD,
    UPDATE_PROFILE_IMAGE_FETCH,
    // UPDATE_PROFILE_IMAGE_ERROR,
} from "../types";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA3NzgxMTE0LCJleHAiOjE2MzkzMTcxMTR9.Mp6X98NQ6ZWGqVVxGmND3sEjwTwV9_AIUjFnskyiJ2I"

export const getProfileAction = () => {
    return (dispatch) => {

            const headers = {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
            };

            dispatch({ type: PROFILE_LOAD, payload: "" });
            Axios.get("https://questkart.com/api/shopuser/shop/details", { headers })
                    .then((resp) => {
                        //     console.log(resp)
                        //     localStorage.setItem("serviceRange", resp.data.data[0].serviceRange);
                            dispatch({ type: PROFILE_FETCH, payload: resp.data.data });
                    })
                    .catch((err) => {
                            dispatch({
                                    type: PROFILE_ERROR,
                                    payload: "Unable to get data. Try again.",
                            });
                    });
    };
};

export const updateProfileRequestAction = (data) => {
        return (dispatch) => {

                const headers = {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                };

                dispatch({ type: UPDATE_PROFILE_REQUEST_LOAD });
                Axios.post("/api/shopuser/shop/details", data, { headers })
                        .then((resp) => {
                                dispatch({
                                        type: UPDATE_PROFILE_REQUEST_FETCH,
                                        payload: resp.data.message,
                                });
                        })
                        .catch((err) => {
                                dispatch({
                                        type: UPDATE_PROFILE_REQUEST_ERROR,
                                        payload: "Unable to get data. Try again.",
                                });
                        });
        };
};

export const alertOpenUpdateProfileAction = (data) => {
        return {
                type: UPDATE_PROFILE,
                payload: data,
        };
};

export const updateServiceRangeAction = (data) => {
        return (dispatch) => {

                const headers = {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                };

                dispatch({ type: UPDATE_SERVICERANGE_LOAD });

                Axios.patch("/api/shopuser/shop/updateservicerange", data, { headers })
                        .then((resp) => {
                                localStorage.setItem("serviceRange", resp.data.serviceRange);
                                dispatch({
                                        type: UPDATE_SERVICERANGE_FETCH,
                                        paylaod: resp.data.serviceRange,
                                });
                        })
                        .catch((err) => {
                                dispatch({ type: UPDATE_SERVICERANGE_ERROR, paylaod: "Error Occured" });
                        });
        };
};

export const updateMovValueAction = (data) => {
        return (dispatch) => {

                const headers = {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                };

                dispatch({ type: UPDATE_MOV_LOAD });

                Axios.patch("/api/shopuser/shop/mov", data, { headers })
                        .then((resp) => {
                                dispatch({
                                        type: UPDATE_MOV_FETCH,
                                        payload: resp.data.movValue,
                                });
                        })
                        .catch((err) => {
                                dispatch({ type: UPDATE_MOV_ERROR, paylaod: "Error Occured" });
                        });
        };
};

export const updateShopProfileImageAction = (data) => {
        return (dispatch) => {

                const headers = {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + token,
                };

                dispatch({ type: UPDATE_PROFILE_IMAGE_LOAD });

                Axios.patch("/api/shopuser/shop/profileimage", data, { headers })
                        .then((resp) => {
                                dispatch({
                                        type: UPDATE_PROFILE_IMAGE_FETCH,
                                        payload: resp.data.message,
                                });
                        })
                        .catch((err) => {
                                console.log(err);
                                dispatch({
                                        type: UPDATE_PROFILE_IMAGE_ERROR,
                                        paylaod: "Error Occured",
                                });
                        });
        };
};
