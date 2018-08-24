import homeReducer from './reducer_home';
import aboutReducer from './reducer_about';
import secretReducer from './reducer_secret';
import credentialsReducer from './reducer_credentials';
import { combineReducers } from 'redux';

export default combineReducers(
    {
        home: homeReducer,
        about: aboutReducer,
        credentials: credentialsReducer,
        secret: secretReducer
    }
)