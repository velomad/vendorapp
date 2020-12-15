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

const initialState = {
        shopProfile: [],
        error: "",
        isLoading: false,
        updateProfileRequestIsLoading: false,
        updateProfileRequest: "",
        updateProfileRequestError: "",
        alertOpenProfileUpdate: false,
        serviceRangeLoad: false,
        serviceRange: "",
        serviceRangeError: "",
        updateMovIsLoading: false,
        updatedMov: "",
        updateMovIsError: "",
        profileImageIsLoading: true,
        profileImage: "",
        profileImageError: "",
};

const profileReducer = (state = initialState, action) => {
        if (action.type === PROFILE_LOAD) {
                return {
                        ...state,
                        isLoading: true,
                };
        }
        if (action.type === PROFILE_FETCH) {
                return {
                        ...state,
                        isLoading: false,
                        shopProfile: action.payload,
                };
        }
        // if (action.type === PROFILE_ERROR) {
        //         return {
        //                 ...state,
        //                 isLoading: false,
        //                 error: action.payload,
        //         };
        // }
        if (action.type === UPDATE_PROFILE_REQUEST_LOAD) {
                return {
                        ...state,
                        updateProfileRequestIsLoading: true,
                };
        }
        if (action.type === UPDATE_PROFILE_REQUEST_FETCH) {
                return {
                        ...state,
                        updateProfileRequest: action.payload,
                };
        }
        // if (action.type === UPDATE_PROFILE_REQUEST_ERROR) {
        //         return {
        //                 ...state,
        //                 updateProfileRequestError: action.payload,
        //         };
        // }
        if (action.type === UPDATE_PROFILE) {
                return {
                        ...state,
                        alertOpenProfileUpdate: action.payload,
                };
        }
        if (action.type === UPDATE_SERVICERANGE_LOAD) {
                return {
                        ...state,
                        serviceRangeLoad: true,
                };
        }
        if (action.type === UPDATE_SERVICERANGE_FETCH) {
                return {
                        ...state,
                        serviceRange: action.payload,
                        serviceRangeLoad: false,
                };
        }
        // if (action.type === UPDATE_SERVICERANGE_ERROR) {
        //         return {
        //                 ...state,
        //                 serviceRangeError: action.payload,
        //                 serviceRangeLoad: false,
        //         };
        // }
        if (action.type === UPDATE_MOV_LOAD) {
                return {
                        ...state,
                        updateMovIsLoading: true,
                };
        }
        if (action.type === UPDATE_MOV_FETCH) {
                return {
                        ...state,
                        updateMovIsLoading: false,
                        updatedMov: action.payload,
                };
        }
        // if (action.type === UPDATE_MOV_ERROR) {
        //         return {
        //                 ...state,
        //                 updateMovIsLoading: false,
        //                 updateMovIsError: action.payload,
        //         };
        // }
        if (action.type === UPDATE_PROFILE_IMAGE_LOAD) {
                return {
                        ...state,
                        profileImageIsLoading: true,
                };
        }
        if (action.type === UPDATE_PROFILE_IMAGE_FETCH) {
                return {
                        ...state,
                        profileImageIsLoading: false,
                        profileImage: action.payload,
                };
        }
        // if (action.type === UPDATE_PROFILE_IMAGE_ERROR) {
        //         return {
        //                 ...state,
        //                 profileImageIsLoading: false,
        //                 profileImageError: action.payload,
        //         };
        //}
        else {
                return state;
        }
};
export default profileReducer;
