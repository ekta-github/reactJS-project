import axios from "axios";
import { API } from "actions/api";
import { baseURL} from 'config';

const apiMiddleware = ({ dispatch, getState }) => next => action => {

    if (action.type === API) {
        const { url, method, data, onSuccess, onFailure} = action.payload;
        const dataProperty = (method === 'GET') ? 'params' : 'data';
        let { headers } = action.payload;
        axios.defaults.baseURL = baseURL;
        //axios.defaults.headers.common.clientId = clientId;
       //axios.defaults.headers.common.clientSecret = clientSecret;
        return axios.request({
            url, method, [dataProperty]: data, headers
        }).then(response => {
            return (onSuccess !== null) ? dispatch(onSuccess(response.data)) : response.data;
        }).catch(error => {
            errorLogger(error.response);
            onFailure !== null && dispatch(onFailure(error));
            throw error.response;
        });
    }

    return next(action);
}

const errorLogger = (errorResponse) => {
    if (!errorResponse) return;

    if (errorResponse.status === 500) {
        // console.log('Error: 500', errorResponse.request.responseURL);
    } else if (errorResponse.status === 422) {
        // console.log('Error: 422', errorResponse.request.responseURL);
    }
}

export default apiMiddleware;