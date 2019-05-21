export const API = 'API';

export default ({
    url = '',
    method = 'GET',
    data = null,
    onSuccess = null,
    onFailure = null,
    responseType = '',
    headers = {}
}) => ({
    type: API,
    payload: {
        url,
        method,
        data,
        onSuccess,
        onFailure,
        responseType,
        headers
    }
});
