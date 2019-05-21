import {POSTDATA_SUCCESS } from 'actions/core';

const initialState = {
    postData: []
}
export default function (state = initialState, action) {
    console.log(action.response);
    switch (action.type) {
        case POSTDATA_SUCCESS:
            return {
                ...state,
                postData: action.response
            };
        default:
            return state;
    }
}
