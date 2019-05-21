const url = window.location.hostname.split('.')[0];
let baseURL = '', clientId, clientSecret;

let setEnvConfig = (env) => {
    baseURL = process.env['REACT_APP_' + env + '_API_URL'];
    clientId = process.env['REACT_APP_' + env + '_CLIENT_ID'];
    clientSecret = process.env['REACT_APP_' + env + '_CLIENT_SECRET_KEY'];
}

if ((url.indexOf('localhost') !== -1) ) {
    setEnvConfig('CIT');
} else {
    setEnvConfig('PROD');
}

export {
    baseURL,
    clientId,
    clientSecret
};