import {
    CURRENT_ORDERS_LOAD,
    CURRENT_ORDERS_FETCH,
    // SHOP_STATUS_LOAD,
    // SHOP_STATUS_FETCH,
    // SHOP_STATUS_ERROR,
    // DELIVERY_ALERT,
    // CANCLE_ALERT,
    GET_SHOP_STATUS_LOAD,
    GET_SHOP_STATUS_FETCH,
    // GET_SHOP_STATUS_ERROR,
   
  } from "../types";
  
  const initialState = {
    currentOrders: [],
    error: "",
    isLoading: false,
    // shopStatus: JSON.parse(localStorage.getItem('shopStatus')),
    shopStatusError: "",
    shopStatusIsLoading: false,
    alertOpen:false,
    alertOpenCancle:false,
    getShopStatus:'',
    getShopStatusIsLoading:'Loading...',
    fcmToken:''
  };
  
  const dashboardReducer = (state = initialState, action) => {
    if (action.type === CURRENT_ORDERS_LOAD) {
      return {
        ...state,
        isLoading: true,
      };
    }
    if (action.type === CURRENT_ORDERS_FETCH) {
      return {
        ...state,
        isLoading: false,
        currentOrders: action.payload,
        error: "",
      };
    }
    // if (action.type === CURRENT_ORDERS_ERROR) {
    //   return {
    //     ...state,
    //     error: action.payload,
    //   }
    // }
    // if (action.type === SHOP_STATUS_LOAD) {
    //   return {
    //     ...state,
    //     shopStatusIsLoading: true
    //   }
    // }
    // if (action.type === SHOP_STATUS_FETCH) {
    //   return {
    //     ...state,
    //     shopStatusIsLoading: false,
    //     shopStatus: action.payload
    //   };
    // }
    // if (action.type === SHOP_STATUS_ERROR) {
    //   return {
    //     ...state,
    //     shopStatusError: action.payload
    //   };
    // }
    if (action.type === GET_SHOP_STATUS_LOAD) {
      return {
        ...state,
        getShopStatusIsLoading:action.payload
      }
    }
    if (action.type === GET_SHOP_STATUS_FETCH) {
      return {
        ...state,
        shopStatusIsLoading: false,
        shopStatus: action.payload
      };
    }
    // if (action.type === GET_SHOP_STATUS_ERROR) {
    //   return {
    //     ...state,
    //   };
    // }
    // if (action.type === DELIVERY_ALERT) {
    //   return {
    //     ...state,
    //     alertOpen: action.payload
    //   };
    // }
    // if (action.type === CANCLE_ALERT) {
    //   return {
    //     ...state,
    //     alertOpenCancle: action.payload
    //   };
    // }
    // if (action.type === GET_TOKEN) {
    //   return {
    //     ...state,
    //     fcmToken: action.payload
    //   };
    // }
    else {
      return state
    }
  };
  
  
  export default dashboardReducer
  