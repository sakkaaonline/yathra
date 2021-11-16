import { SET_LANG  } from "./types";
import { locale, DEFAULT_LANGUAGE } from "../../localization";

export default function language(state = DEFAULT_LANGUAGE, action) {
    switch(action.type) {
        case SET_LANG:
            locale.setLanguage(action.lang);
            return action.lang
        default:
            return state;
    }
}