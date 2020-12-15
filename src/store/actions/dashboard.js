import Axios from "axios";
import {CURRENT_ORDERS_LOAD,CURRENT_ORDERS_FETCH,GET_SHOP_STATUS_FETCH,GET_SHOP_STATUS_LOAD} from '../types'



export const getCurrentOrdersAction = () => {
    return (dispatch) => {

            const headers = {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA3NzgxMTE0LCJleHAiOjE2MzkzMTcxMTR9.Mp6X98NQ6ZWGqVVxGmND3sEjwTwV9_AIUjFnskyiJ2I",
            };

            dispatch({ type: CURRENT_ORDERS_LOAD, payload: "Loading..." });
            Axios.get("https://questkart.com/api/shopuser/order/orders", { headers })
                    .then((resp) => {
                            dispatch({ type: CURRENT_ORDERS_FETCH, payload: resp.data.orders });
                    })
                    .catch((err) => {
                            console.log(err)
                        //     dispatch({
                        //             type: CURRENT_ORDERS_ERROR,
                        //             payload: "Unable to get data. Try again.",
                        //     });
                    });
    };
};

export const getShopStatusAction = () => {
    return (dispatch) => {

            const headers = {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA3NzgxMTE0LCJleHAiOjE2MzkzMTcxMTR9.Mp6X98NQ6ZWGqVVxGmND3sEjwTwV9_AIUjFnskyiJ2I",
            };

            dispatch({ type: GET_SHOP_STATUS_LOAD, payload: "" });
            Axios.get("/api/shopuser/shop/status", { headers })
                    .then((resp) => {
                            const status = resp.data.data[0].shopStatus;
                            localStorage.setItem("shopStatus", JSON.stringify(status));
                            dispatch({
                                    type: GET_SHOP_STATUS_FETCH,
                                    payload: resp.data.data[0].shopStatus,
                            });
                    })
                    .catch((err) => {
                            dispatch({
                                    type: GET_SHOP_STATUS_ERROR,
                                    payload: "Unable to get data. Try again.",
                            });
                    });
    };
};

export const setShopStatusAction = () => {
    return (dispatch) => {
           

            const headers = {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjA3NzgxMTE0LCJleHAiOjE2MzkzMTcxMTR9.Mp6X98NQ6ZWGqVVxGmND3sEjwTwV9_AIUjFnskyiJ2I",
            };

            dispatch({ type: SHOP_STATUS_LOAD, payload: "" });
            Axios.patch("/api/shopuser/shop/status", null, {
                    headers,
            })
                    .then((resp) => {
                            var status;
                            resp.data.data.forEach((element) => {
                                    status = element.shopStatus;
                            });
                            localStorage.setItem("shopStatus", JSON.stringify(status));
                            dispatch({ type: SHOP_STATUS_FETCH, payload: status });
                    })
                    .catch((err) => {
                            dispatch({
                                    type: SHOP_STATUS_ERROR,
                                    payload: "Unable to get data. Try again.",
                            });
                    });
    };
};



