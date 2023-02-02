import { combineReducers } from 'redux';

import taskReducer from 'src/reducers/taskReducer';

const rootReducer = combineReducers({ taskReducer });

export default rootReducer;
