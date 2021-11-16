import { combineReducers } from 'redux';
import postReducer from '../ducks/MainPage/reducers';
import language from '../ducks/Lang/reducers';

export default combineReducers({
    TestData: postReducer,
    language,
});;