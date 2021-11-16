import { GETUSERS } from './types';

export function getUsers(payload) {
    return {
        type: GETUSERS,
        payload
    };    
}