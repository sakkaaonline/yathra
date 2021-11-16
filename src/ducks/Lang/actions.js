import { SET_LANG } from './types';

export function setLanguage(lang) {
    return {
        type: SET_LANG,
        lang,
    };    
}