import { getUsers } from './actions';

export function getData() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return dispatch => {
        return fetch(url, {method: 'GET'})
        .then(response => response.json())
        .then(res => {
            console.error('Success:', res);
            dispatch(getUsers(res));
        })
        .catch(err => {
            console.error('Error:', err);
        })
    };    
}