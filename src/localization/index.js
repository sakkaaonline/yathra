import LocalizedStrings from 'react-localization';
import { en } from './english/en';
import { ta } from './tamil/ta';

const locale = new LocalizedStrings({
	ta,
	en
});

export const DEFAULT_LANGUAGE = 'ta';

const param = 'lang';
const regex = new RegExp(`[?&]${param}(=([^&#]*)|&|#|$)`);
const result = regex.exec(window.location.search);
const lang = result && result[2] ? result[2] : DEFAULT_LANGUAGE;
localStorage.setItem("lang", lang);
locale.setLanguage(lang);
export { locale };