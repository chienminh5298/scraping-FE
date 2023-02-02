import rootReducer from 'src/reducers';
import { createStore } from 'redux';

const store = createStore(rootReducer);

export default store;
