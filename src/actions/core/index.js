import apiAction from 'actions/api';
export const POSTDATA_SUCCESS = 'POSTDATA_SUCCESS';
export const postDataSuccess = response => ({ type: POSTDATA_SUCCESS, response });

export const getPostData = () => apiAction({
    url: 'posts',
    onSuccess: postDataSuccess,
    onFailure: (error) => {
        console.log('Error: getMetaData', error.response);
    }
});

export default {
    getPostData,
    postDataSuccess
}